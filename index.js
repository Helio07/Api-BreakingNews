const express = require('express')
const userRoute = require('./src/routes/user.route')
const connectDB = require('./src/database/db')


const app = express()
const port = 3000


connectDB();
app.use(express.json())
app.use('/user',  userRoute)
  

app.listen(3000, () => console.log(`listening on ${port}`))