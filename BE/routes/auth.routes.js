const express = require('express')

const {  UpdateUsers, DeleteUsers, GetOneUser, getAllUsers } = require('../controller/auth.controller.js')

const { verifyUser, verifyAdmin } = require('../utils/VerifyToken.js')

const router = express.Router()







router.put('/:id' , verifyUser ,UpdateUsers )


router.delete('/:id' , verifyUser , DeleteUsers )

router.get('/:id' , verifyUser , GetOneUser )


router.get('/' , verifyAdmin, getAllUsers )




module.exports = router