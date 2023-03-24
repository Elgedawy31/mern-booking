const express = require('express')
const { CreateRoom , updateRoomavaiabilaty, deleteRooms, getoneRoom, getallrooms } = require('../controller/room.controller.js')
const { verifyAdmin } = require('../utils/VerifyToken.js')
const router = express.Router()

router.post('/:hotelId' , verifyAdmin ,CreateRoom )


router.put('/avaiable/:id'  ,updateRoomavaiabilaty )


router.delete('/:id/:hotelId'  , verifyAdmin, deleteRooms )

router.get('/:id'  , getoneRoom )


router.get('/' , getallrooms )



module.exports = router    