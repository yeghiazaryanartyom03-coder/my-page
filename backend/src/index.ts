import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors());
app.use(express.json())

async function connectDB(){
  try{
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('✅ Подключено к локальному MongoDB');
    
    // Проверка: выводим список баз данных
    const dbs = await mongoose.connection.db.admin().listDatabases();
    console.log('📁 Доступные базы:', dbs.databases.map((db: any) => db.name));
  }catch(error){
      console.log('error')
  }
}
connectDB()
app.get('api/hello',(req,res)=>{
  res.json({message:'Hello from backend'});
})

app.listen(PORT,() => {
  console.log(`server is running on http://localhost:${PORT}`)
})