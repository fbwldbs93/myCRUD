import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/nodeexpressproject')

mongoose.connection.on('error', (err)=>{
    console.log("⛔ DB Error =>",err)
})
//connection 을 통해서 에러를 헨들링할 수 있음

mongoose.connection.once('open', ()=>{
    console.log("✅ Connected to DB")
})