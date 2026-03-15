import { createSelector } from '@reduxjs/toolkit';
import { type RootState } from '../store';
import type { CartItem, IItem } from '../../types';

const shippingCosts = {
  standard: 500,
  express: 1000,
  free: 0,
} as const;

export type EnrichedCartItem = IItem & {
  quantity: number;
  shippingMethod: keyof typeof shippingCosts;
};

export const selectCartItems = (state: RootState): CartItem[] => state.cart.items;
export const selectProducts = (state: RootState): IItem[] => state.items.items;

export const selectEnrichedCartItems = createSelector(
  [selectCartItems, selectProducts],
  (cartItems, products): EnrichedCartItem[] => {
    return cartItems
      .map((cartItem): EnrichedCartItem | null => {
        const product = products.find(p => p.id === cartItem.itemId); 
        if (!product) return null;
        return {
          ...product,
          quantity: cartItem.quantity,
          shippingMethod: cartItem.shippingMethod,
        };
      })
      .filter((item): item is EnrichedCartItem => item !== null);
  }
);

export const selectTotalQuantity = createSelector(
  [selectEnrichedCartItems],
  (items) => items.reduce((sum, item) => sum + item.quantity, 0)
  
)

export const selectSubtotal = createSelector(
  [selectEnrichedCartItems],
  (items) => items.reduce((sum, item) => sum + ((item.price) * item.quantity), 0)
);

export const selectShippingTotal = createSelector(
  [selectEnrichedCartItems],
  (items) => items.reduce((sum, item) => sum + shippingCosts[item.shippingMethod], 0)
);

export const selectTotal = createSelector(
  [selectSubtotal, selectShippingTotal],
  (subtotal, shipping) => subtotal + shipping
);