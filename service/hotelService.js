var Hotel = require ('../model/hotelModel')
async function list(req,res,next){
    await Hotel.find()
    .then((data,err)=>{
        if(err){
        res.status(503).json(err)}
        else{
            res.status(200).json(data)
        }
    })
}

async function supp(req,res,next){
    await Hotel.findByIdAndDelete(req.params.id)   
     .then((data,err)=>{
        if(err){
        res.status(503).json(err)}
        else{
            res.status(200).json(data)
        }
    })

}

async function modifier(req,res,next){
    await Hotel.findByIdAndUpdate(req.params.id,req.body,{new: true})
    .then((data,err)=>{
        if(err){
        res.status(503).json(err)}
        else{
            res.status(200).json(data)
        }
    })
}

const create = async (req,res,next)=>{
    const { name, fabricationDate, nbrRooms = 10 } = req.body 

    await new Hotel ({
        name:name,
        fabricationDate:fabricationDate,
        nbrRooms:nbrRooms}).save()
        .then((err,data)=>{if(err){console.log(err);
        }})

res.json('Hotel added ! name : '+ name + ' fabricationDate : '+ fabricationDate+ ' nbrRooms : '+ nbrRooms)
}

async function searchHotels(req,res,next){
    await Hotel.find({ nbrRooms: { $gte: 10, $lte: 100 } })
    .then((data,err)=>{
        if(err){
        res.status(503).json(err)}
        else{
            res.status(200).json(data)
        }
    })
}



module.exports = { create, list, supp, modifier,searchHotels }