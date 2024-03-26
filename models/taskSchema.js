const mongoose = require("mongoose")

const taskSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },
        desc:{
            type: String,
            required: true
        },
        createAt:{
            type: Date,
            default: new Date()
        },
        owner:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"user"
        }
    }
)

const Task = mongoose.model( "task", taskSchema )
module.exports = Task