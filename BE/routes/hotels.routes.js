const express = require('express')

const { CreateHotels, UpdateHotels, DeleteHotels, GetOneHotel, getAllHotels, countByCity, countbytype, getHotelRooms } = require('../controller/hotels.controller.js')

const { verifyAdmin } = require('../utils/VerifyToken.js')

const router = express.Router()





router.post('/' , verifyAdmin,CreateHotels )


router.put('/:id' , verifyAdmin ,UpdateHotels )


router.delete('/:id'  , verifyAdmin, DeleteHotels )

router.get('/find/:id'  , GetOneHotel )


router.get('/' , getAllHotels )



router.get('/countByCity' , countByCity )
router.get('/countByType' , countbytype )


router.get('/room/:id' , getHotelRooms )




module.exports = router