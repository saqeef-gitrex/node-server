import express from "express"
import dotenv from "dotenv"

const app = express()

dotenv.config()


app.get("/",async(req,res)=>{
    const data = await fetch("https://dummyjson.com/users")
    .then((res)=>res.json())
    .catch((err)=>console.log("Error fetching data"))
    .finally(()=>console.log("Promise executed"))
    
    return res.json({
        success : true,
        data
    }).status(200)
})

export default app
