import {Router} from 'express'
import { News } from '../models/News'

const router = Router();

router.get('/', async(req,res)=>{
  try{
      const history = await News.find()
      res.json(history)
    }catch(error){
      res.status(500).json({message: 'server error'})
    }
})

export default router