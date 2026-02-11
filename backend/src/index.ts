import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './db'
import historyRouter from './routes/history'
import playerRouter from './routes/players'
import newsRouter from './routes/news'
import legendRouter from './routes/legends'
import matchRouter from './routes/matches'
import itemRouter from './routes/items'
import cartRouter from './routes/carts'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

connectDB()

app.use('/api/history', historyRouter)
app.use('/api/player', playerRouter)
app.use('/api/news', newsRouter)
app.use('/api/legend', legendRouter)
app.use('/api/match', matchRouter)
app.use('/api/items', itemRouter)
app.use("/api/cart", cartRouter)

app.listen(PORT,()=>{
  console.log('server running')
})