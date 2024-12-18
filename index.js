var express = require('express')
var mongoose = require ('mongoose')
var hotelRouter = require('./controller/HotelController')
var app= express()
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/user-db').then(
    ()=>{console.log("connected");
})
.catch((error)=>{
    console.log(error);
})
app.use('/hotels',hotelRouter)







var http = require('http')
var server = http.createServer(app)

server.listen(3000,()=>{
    console.log('server started !');
})