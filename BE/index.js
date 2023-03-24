const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express();
const cookie_Parser = require('cookie-parser')
const userrouter = require('./routes/users.routes.js')
const authrouter = require('./routes/auth.routes.js')
const hotelsrouter = require('./routes/hotels.routes.js')
const roomsrouter  = require('./routes/rooms.routes.js')
dotenv.config()


app.use(express.json())
app.use(cors())
app.use(cookie_Parser())


mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => console.log('Successfully connected to MongoDB'));
db.on('error', (e) => console.log(e));


app.use('/auth' ,userrouter )
app.use('/user' ,authrouter )
app.use('/hotels' ,hotelsrouter )
app.use('/rooms' ,roomsrouter )

app.listen(process.env.PORT , ( ) => {

    console.log('app running in http://localhost:4000')

})