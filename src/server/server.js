"use sctrict"
const path = require("path")
const express = require("express")
const app = express()

const baseFolder = path.resolve(__dirname, '../client/')

app.use("/",express.static(baseFolder))

app.listen(8080,()=>{
  console.log("Server UP!")
})
