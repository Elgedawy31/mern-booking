const jwt = require('jsonwebtoken');


const VerifyToken =async (req,  res , next) => {

    try { 
        let token = req.cookies.access

    if(!token){
        res.status(500).json('not found token')
    }


    const dataa = await jwt.verify(token , process.env.JWT)

    req.user = dataa

    next()
    } catch (error) {
        
       console.log('errrors')
    }
}



const verifyUser = (req , res , next) => {

    VerifyToken(req ,res  ,  () => {

        if(req.user.id === req.params.id || req.user.isAdmin){

            next()
        }else{
            res.status(500).json('req params is not req user ')
        }
    } ) 
}


const verifyAdmin = (req , res , next) => {


    VerifyToken(req ,res , () => {

    console.log(req.user)


        if( req.user.isAdmin){

            next()
        }else{
            res.status(500).json('only admin can make this desicions ')
        }
    } ) 
}



module.exports = {verifyUser , verifyAdmin}