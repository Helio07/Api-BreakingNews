import mongoose from 'mongoose'

const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB Atlas Conectado"))
    .catch(err => console.log(err))

}

export default connectDB;