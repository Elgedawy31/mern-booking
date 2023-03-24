const mongoose = require('mongoose')

const schema = mongoose.Schema


const RoomSchema = new schema({

   title:{
    type:String , 
    required:true
   },
   price:{
    type:Number , 
    required:true
   },
   maxPeople:{
    type:Number , 
    required:true
   },
   desc:{
    type:String , 
    required:true
   },
   roomNumbers:[{number:Number , unvailabaleDates: {type:[Date]}}]
},

{timestamps:true}

)


const RoomModel = mongoose.model('rooms' , RoomSchema)


module.exports = {RoomModel}