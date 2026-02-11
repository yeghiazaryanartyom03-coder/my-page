import { Router } from 'express'
import { History } from '../models/History'

const router = Router();

router.get('/',async(req, res) =>{
  try{
    const history = await History.find()
    res.json(history)
  }catch(error){
    res.status(500).json({message: 'server error'})
  }
})

export default router