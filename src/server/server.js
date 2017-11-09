"use sctrict"
const path = require("path")
const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const baseFolder = path.resolve(__dirname, '../client/')

app.use("/",express.static(baseFolder))

app.use(bodyParser.json())

const data = {
    "list" : ["Hola","Mundo","Cruel","!!!!!!"]
}

app.get("/datos",(req,resp)=>{
    resp.json(data)
    
})

app.listen(8080,()=>{
  console.log("Server UP!")
})
