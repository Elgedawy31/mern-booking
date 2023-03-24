const { HotelModel } = require("../models/hotels.models");
const { RoomModel } = require("../models/rooms.models");




const CreateRoom =async (req , res , next) => {

    const hotelId = req.params.hotelId;

    const newRoom = new RoomModel(req.body)




    try {

        const savedRoom = await newRoom.save();

        try {

            await HotelModel.findByIdAndUpdate(hotelId , {$push : {rooms:savedRoom._id}})

            
        } catch (error) {
            res.status(500).json({error})
        }


        res.status(200).json({savedRoom})

        
    } catch (error) {
        res.status(500).json({error})
        
    }

}



//delete


const deleteRooms = async(req, res , next) =>{

    const hotelId = req.params.hotelId;


    try {

        await RoomModel.findByIdAndDelete( hotelId )

        try {

            await HotelModel.findByIdAndUpdate(hotelId , {$pull : {rooms : req.params.id}})

            
        } catch (error) {
            res.status(500).json({error})
        }


        





        res.status(200).json({message:'Done Deleted'})
        


    } catch (error) {
        
        res.status(500).json({error})
    }

}


//GET ONE


const getoneRoom = async(req, res , next) =>{

    const {id} = req.params


    try {

        


        const Hotel = await RoomModel.findById( id )


        res.status(200).json({Hotel})
        


    } catch (error) {
        
        res.status(500).json({error})
    }

}


//GET ALL

const getallrooms = async(req, res , next) =>{



    try {

        


        const Hotels = await RoomModel.find()


        res.status(200).json({Hotels})
        


    } catch (error) {
        
        res.status(500).json({error})
    }

}


const updateRoomavaiabilaty =async (req , res , next) => {


    try {

        const updatedRoom = await RoomModel.updateOne({"roomNumbers._id":req.params.id} , {$push:{"roomNumbers.$.unvailabaleDates": req.body.dates}})

        res.status(200).json({updatedRoom})
        
    } catch (error) {
        res.status(500).json({error})
    }

}



module.exports = {CreateRoom  ,updateRoomavaiabilaty , deleteRooms , getoneRoom , getallrooms}