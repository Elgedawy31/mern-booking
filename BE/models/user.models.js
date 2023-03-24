const mongoose = require('mongoose')

const schema = mongoose.Schema


const UserSchema = new schema({

    username:{
        type:String , 
        required:true ,
        unique:true
    },
    email:{
        type:String , 
        required:true ,
        unique:true
    },
    password:{
        type:String , 
        required:true ,
    },
    isAdmin:{
        type:Boolean ,
        default:false 
        
    },

},
{timestamps:true}
)


const UserModel = mongoose.model('user' , UserSchema)


module.exports = {UserModel}