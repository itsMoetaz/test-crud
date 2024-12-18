var express = require('express')
var mongoose = require ('mongoose')
var hotelRouter = require('./controller/HotelController')
var app= express()
var path = require ('path')
var { configureSocket } = require('./service/hotelService')
var socketIo = require('socket.io')

app.use(express.json())
mongoose.connect('mongodb://localhost:27017/user-db').then(
    ()=>{console.log("connected");
})
.catch((error)=>{
    console.log(error);
})
app.use('/hotels',hotelRouter)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');




var http = require('http')
var server = http.createServer(app)
const io = socketIo(server);
configureSocket(io);


server.listen(3000,()=>{
    console.log('server started !');
})