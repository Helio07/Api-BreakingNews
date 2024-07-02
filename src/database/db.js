const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect("mongodb+srv://root:77db77@cluster0.i6qivic.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",)
    .then(() => console.log("MongoDB Atlas Conectado"))
    .catch(err => console.log(err))

}

module.exports = connectDB;