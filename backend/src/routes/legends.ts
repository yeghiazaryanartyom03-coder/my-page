import { Router } from 'express'
import { Legend } from '../models/Legend'

const router = Router();

router.get('/',async(req, res) =>{
  try{
    const legend = await Legend.find()
    res.json(legend)
  }catch(error){
    res.status(500).json({message: 'server error'})
  }
})

export default router