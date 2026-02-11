import { Router } from 'express'
import { Match } from '../models/Match'

const router = Router();

router.get('/',async(req, res) =>{
  try{
    const match = await Match.find()
    res.json(match)
  }catch(error){
    res.status(500).json({message: 'server error'})
  }
})

export default router