import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config({path:'./config/.env'})

const Connection = async()=>{
    try{
        //to connect with the mongodb database
        await mongoose.connect(process.env.URI)
        console.log("Connected")

    }catch(err){
        console.log("Error:"+err.message)
    }
}

Connection()