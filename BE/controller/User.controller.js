const { UserModel } = require('../models/user.models.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserRegister =async (req,  res) => {

    try {

        const {email , username , password } = req.body

        const saltRounds = 12

        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);   


        const newUser = new UserModel({email , username , password:hash})

        const  SavedUser = await newUser.save() 

        res.status(200).json({SavedUser})

    } catch (error) {
        res.status(500).json({error})
    }
}




const UserLogin =async (req,  res) => {



    try {
 
        const {username , password } = req.body

        
        const Data = await UserModel.find({username , })

        if(Data){
            bcrypt.compare(password ,Data[0].password , (err , same) => {
                
                if(same){

                    const token = jwt.sign({id:Data[0]._id , isAdmin:Data[0].isAdmin } , process.env.JWT)

                    res.cookie('access',token , {
                        httpOnly:true
                    }).status(200).json({Data })
                }else{
                    res.status(500).json({message:'password or username is wrong '})
                }
            } )
        }else{
            res.status(500).json({mess:'user not found'})
        }
        


    } catch (error) {
        res.status(500).json({error})
    }
}


module.exports = {UserRegister , UserLogin}