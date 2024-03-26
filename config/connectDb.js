const mongoose = require("mongoose")

const connectDb = async()=>{
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("database connected"))
    .catch((err)=> console.log(err))
}

module.exports = connectDb