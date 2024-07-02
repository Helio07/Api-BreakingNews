import express from 'express'
import userRoute from './src/routes/user.route.js'
import connectDB from './src/database/db.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = process.env.PORT || 3000


connectDB();
app.use(express.json())
app.use('/user',  userRoute)
  

app.listen(3000, () => console.log(`listening on ${port}`))