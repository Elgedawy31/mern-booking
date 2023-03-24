const { HotelModel } = require("../models/hotels.models.js")
const {RoomModel} = require('../models/rooms.models.js')




//create 

const CreateHotels = async(req , res , next) => {

    
    try {

        

        const hotelData = new HotelModel(req.body)

        const SavedHotel = await hotelData.save()


        res.status(200).json({SavedHotel})
        


    } catch (error) {
        
        res.status(500).json({error})
    }


}

//update 

const UpdateHotels = async(req, res , next) =>{

    const {id} = req.params


    try {

        


        const UpdatedHotel = await HotelModel.findByIdAndUpdate( id  , {$set:req.body} , {new:true})


        res.status(200).json({UpdatedHotel})
        


    } catch (error) {
        
        res.status(500).json({error})
    }

}


//delete


const DeleteHotels = async(req, res , next) =>{

    const {id} = req.params


    try {

        


await HotelModel.findByIdAndDelete( id )


        res.status(200).json({message:'Done Deleted'})
        


    } catch (error) {
        
        res.status(500).json({error})
    }

}


//GET ONE


const GetOneHotel = async(req, res , next) =>{

    const {id} = req.params


    try {

        


        const Hotel = await HotelModel.findById( id )


        res.status(200).json({Hotel})
        


    } catch (error) {
        
        res.status(500).json({error})
    }

}


//GET ALL

const countByCity = async(req, res , next) =>{

    const cities = req.query.city.split(',')


    try {


        const list = await Promise.all(cities.map(city => {
            return HotelModel.countDocuments({city:city})
        }))
        




        res.status(200).json({list})
        


    } catch (error) {
        
        res.status(500).json({error})
    }

}
const getAllHotels = async(req, res , next) =>{


    const {min , max , limits , ...others } = req.query


    try {

        


        const Hotels = await HotelModel.find({...others , cheapestPrice : {$gt:min || 1 , $lt:max ||1111}}).limit(limits)


        res.status(200).json({Hotels})
        


    } catch (error) {
        
        res.status(500).json({error})
    }

}



const countbytype = async(req, res , next) =>{





    try {


        const hotelCount =await HotelModel.countDocuments({type:'hotel'})
        const apartment = await HotelModel.countDocuments({type: "apartment"})
        const resot = await HotelModel.countDocuments({type: "resort"})
        const villa = await HotelModel.countDocuments({type: "villa"})
        const cabin = await HotelModel.countDocuments({type: "cabin"})


        res.status(200).json([
            {type:"hotel", count:hotelCount} ,
            {type:"apartments", count:apartment} ,
            {type:"resorts", count:resot} ,
            {type:"villas", count:villa} ,
            {type:"cabins", count:cabin} ,
        ])


    } catch (error) {
        
        res.status(500).json({error})
    }

}


const getHotelRooms = async(req, res , next) =>{





    try {

        const hotel = await HotelModel.findById(req.params.id)

        const list = await Promise.all(hotel.rooms.map(room => {
            return RoomModel.findById(room)
        }))


        res.status(200).json({list})


    } catch (error) {
        
        res.status(500).json({error})
    }

}




module.exports = {CreateHotels  , UpdateHotels , DeleteHotels , GetOneHotel  , getAllHotels , countByCity , countbytype , getHotelRooms}