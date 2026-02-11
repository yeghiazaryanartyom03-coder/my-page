import { Request,Response,NextFunction, Router } from "express";
import { Cart } from "../models/Cart";
import { IItem, Item } from "../models/Item";


const router = Router();

router.post("/add", async(req,res)=>{
  try{
    console.log('Received body:', JSON.stringify(req.body, null, 2))
    const {cartId, items} = req.body;
    
    if (!cartId) {
      return res.status(400).json({ 
        success: false, 
        error: 'cartId is required' 
      });
    }
    
     if (!Array.isArray(items)) {
      return res.status(400).json({ 
        success: false, 
        error: 'items must be an array' 
      });
    }

    for (const item of items) {
      if (!item.itemId || typeof item.itemId !== 'string') {
        return res.status(400).json({
          success: false,
          error: 'Each item must have a string itemId'
        });
      }
      if (item.quantity !== undefined && (typeof item.quantity !== 'number' || item.quantity < 1)) {
        return res.status(400).json({
          success: false,
          error: 'Quantity must be a positive number'
        });
      }
    }

    let cart = await Cart.findOne({cartId});

    if(!cart) {
      cart = await Cart.create({
        cartId,
        items: items.map(item => ({
          itemId: item.itemId,
          quantity: item.quantity || 1
        }))
      })

      return res.json({success: true, cart})
    }
   
    for (const newItem of items) {
      const existingItemIndex = cart.items.findIndex(
        item => item.itemId === newItem.itemId
      );
      
      if (existingItemIndex >= 0) {
        // Товар уже есть - увеличиваем количество
        cart.items[existingItemIndex].quantity += newItem.quantity || 1;
      } else {
        // Новый товар - добавляем
        cart.items.push({
          itemId: newItem.itemId,
          quantity: newItem.quantity || 1
        });
      }
    }


    await cart.save()

    res.json({success: true ,cart})
  }catch(error){
    res.status(500).json({ error: 'Server error' })
  }
})

router.get("/:cartId",async (req,res) => {
  try{
    const cart = await Cart.findOne({cartId: req.params.cartId})

    if(!cart){
      return res.json({success: true, items: []})
    }

    const itemIds = cart.items.map(i => i.itemId);

    const items = await Item.find({
      id:{ $in: itemIds }
    })

    const fullCart = cart.items.map((cartItem) => {
      const item = items.find(i => i.id === cartItem.itemId)
    
      if (!item) return null

      return {
        ...item.toObject(),
        quantity: cartItem.quantity
      }
    })

    res.json({success:true, items: fullCart})

  }catch(error){
    res.status(500).json({success: false ,error: 'Server error' })
  }
})

router.delete("/remove", async (req, res) => {
  try {
    const { cartId, itemId } = req.body;
    
    if (!cartId || !itemId) {
      return res.status(400).json({
        error: 'cartId and itemId are required'
      });
    }
    
    const cart = await Cart.findOne({ cartId });
    
    if (!cart) {
      return res.status(404).json({
        error: 'Cart not found'
      });
    }
    
    // Удаляем товар из корзины
    const initialLength = cart.items.length;
    cart.items = cart.items.filter(item => item.itemId !== itemId);
    
    if (cart.items.length === initialLength) {
      return res.status(404).json({
        error: 'Item not found in cart'
      });
    }
    
    await cart.save();
    
    // Если корзина пустая, можно удалить документ
    if (cart.items.length === 0) {
      await Cart.deleteOne({ cartId });
      return res.json({
        success: true,
        message: 'Item removed and cart deleted (empty)',
        cart: null
      });
    }
    
    res.json({
      success: true,
      message: 'Item removed from cart',
      cart
    });
    
  } catch (error) {
    console.error('Error removing from cart:', error);
    res.status(500).json({
      error: 'Server error'
    });
  }
});

export default router