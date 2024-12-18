var express = require('express')
var router = express.Router()
const { list, create, supp, modifier,searchHotels,hotelView } = require('../service/hotelService')
// var validate = require('../middleware/validation')


router.get('/list',list)
router.get('/search',searchHotels)
router.post('/create',create)
router.delete('/delete/:id',supp)
router.put('/update/:id',modifier)
router.get('/hotel',hotelView)


module.exports = router