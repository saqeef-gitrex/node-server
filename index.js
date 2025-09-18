import express from "express"
import dotenv from "dotenv"

const app = express()

dotenv.config()
app.use(express.json())

app.get("/",async(req,res)=>{
    
    let limit = 30;
    let skip = 0;

    if(Object.keys(req.query).length>1){
          limit = Number(req.query.limit)
        skip = Number(req.query.skip)
    }
    
    const data = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)
    .then((res)=>res.json())
    .catch((err)=>console.log("Error fetching data"))
    .finally(()=>console.log("Promise executed"))

    
    return res.json({
        success : true,
        data
    }).status(200)
})
//app.listen(process.env.PORT)
 export default app
