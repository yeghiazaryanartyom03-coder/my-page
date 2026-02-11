import {Router} from 'express'
import { Player } from '../models/Player'

const router = Router();

router.get('/',async(req, res) =>{
  try{
    const player = await Player.find()
    res.json(player)
  }catch(error){
    res.status(500).json({message: 'server error'})
  }
})

export default router