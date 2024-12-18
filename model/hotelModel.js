var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Hotel =  new Schema({
    name:String,
    fabricationDate:Date,
    nbrRooms:Number})
module.exports = mongoose.model('Hotel', Hotel);