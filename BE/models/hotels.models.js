const mongoose = require('mongoose')

const schema = mongoose.Schema


const HotelsSchema = new schema({


    name:{
        type:String , 
        required:true
    },
    type:{
        type:String , 
        required:true
    },
    city:{
        type:String , 
        required:true
    },
    address:{
        type:String , 
        required:true
    },
    title:{
        type:String , 
        required:true
    },
    distance:{
        type:String , 
        required:true
    },
    photos:{
        type:[String] , 
    },
    desc:{
        type:String , 
        required:true
    },
    rating:{
        type:Number , 
        min:0 , 
        max:5
    },
    rooms:{
        type:[String] , 
    },
    // rating:{
    //     type:Number , 
    //     min:0 , 
    //     max:5
    // },
    cheapestPrice:{
        type:Number , 
        required:true
    },
    featured:{
        type:Boolean ,
        default:false
    }

},

{timestamps:true}

)


const HotelModel = mongoose.model('hotel' , HotelsSchema)


module.exports = {HotelModel}