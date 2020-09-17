const express = require('express')
const mongoose= require('mongoose')
const Cards = require('./dbCard')
const cors = require('cors')


// create the server
const mongodb = 'mongodb+srv://admin:admin123@cluster0.vo0po.mongodb.net/tinderdb?retryWrites=true&w=majority'

mongoose.connect(mongodb,{useUnifiedTopology: true,useNewUrlParser: true},(err)=>{
  if(err){
      console.log(err)
  } 
  else console.log('connected to the database')
})

const app = express()
const port = process.env.PORT || 8000

app.use(express.json())
app.use(cors())

app.post('/tinder/card/create',(req,res)=>{
    const dbCard = req.body;
    Cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        res.status(201).send(data)
    })
})

app.get('/',(req,res)=> res.send('hello'))

app.get('/tinder/cards',(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else
        res.status(200).send(data)
    })
})


app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }
    else
    console.log(`server is running on ${port}`)
})