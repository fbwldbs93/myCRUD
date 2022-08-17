import mongoose from "mongoose"

const contentSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    hashtags:[{
        type:String,
        trim:true
    }],
    createdAt:{
        type:Date,
        default:Date.now
    },
    
})

const Contents = mongoose.model("Contents", contentSchema)

export default Contents;