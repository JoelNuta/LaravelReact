"use sctrict"
const path = require("path")
const express = require("express")
const bodyParser = require("body-parser")
const MongoClient = require("mongodb").MongoClient
const app = express()

MongoClient.connect("mongodb://127.0.0.1:27017/miRestApp",(err,db)=>{
    if(err) throw err
    
    const tasks = db.collection("task")

    const baseFolder = path.resolve(__dirname, '../client/')

    app.use("/",express.static(baseFolder))

    app.use(bodyParser.json())

    app.get("/task",(req,resp)=>{
        tasks.find().toArray((err,list) => {
            if(err) resp.end(err)
            resp.json({ "list" : list })
        })
    })
    
    app.get("/filter",(req,resp)=>{
        const nameFilter = req.query.name
        tasks.find({"name":nameFilter}).toArray((err,list) => {
            if(err) resp.end(err)
            resp.json({ "list" : list })
        })
    })

    app.post("/task",(req,resp)=>{
        const newTask = req.body.newTaskName
        const data = { "name" : newTask}
        tasks.save(data,(err,res) => {
            if(err) resp.end(err)
            resp.json({"msg":"Ok"})
        })
    })

    app.listen(80,()=>{
      console.log("Server UP!")
    })
    
    
})

