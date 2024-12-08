const express = require("express")
const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send({hello:"hi"})
})

app.listen(8000,()=>{
    console.log("Server is running at 8000")
})