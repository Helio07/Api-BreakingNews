import express from 'express'
import connectDB from './src/database/db.js'
import dotenv from 'dotenv'


import userRoute from './src/routes/user.route.js'
import authRoute from './src/routes/auth.route.js'
import newsRoute from './src/routes/news.route.js'


dotenv.config()

const app = express()
const port = process.env.PORT || 3000


connectDB();
app.use(express.json())
app.use('/user',  userRoute)
app.use('/auth',  authRoute)
app.use('/news',  newsRoute)
  

app.listen(3000, () => console.log(`listening on ${port}`))