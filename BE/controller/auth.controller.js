const { UserModel } = require("../models/user.models.js")






//update 

const UpdateUsers = async(req, res , next) =>{

    const {id} = req.params


    try {

        


        const UpdatedUser = await UserModel.findByIdAndUpdate( id  , {$set:req.body} , {new:true})


        res.status(200).json({UpdatedUser})
        


    } catch (error) {
        
        res.status(500).json({error})
    }

}


//delete


const DeleteUsers = async(req, res , next) =>{

    const {id} = req.params


    try {

        


await UserModel.findByIdAndDelete( id )


        res.status(200).json({message:'Done Deleted'})
        


    } catch (error) {
        
        res.status(500).json({error})
    }

}


//GET ONE


const GetOneUser = async(req, res , next) =>{

    const {id} = req.params


    try {

        


        const User = await UserModel.findById( id )


        res.status(200).json({User})
        


    } catch (error) {
        
        res.status(500).json({error})
    }

}


//GET ALL

const getAllUsers = async(req, res , next) =>{


    console.log(req.user)


    try {

        


        const Users = await UserModel.find()


        res.status(200).json({Users})
        


    } catch (error) {
        
        res.status(500).json({error})
    }

}




module.exports = {UpdateUsers , DeleteUsers , GetOneUser  , getAllUsers}