const express = require('express')
const app = express()
const cors = require('cors')
const monstersRouter = require('./routes/monstersRouter')
const speciesRouter = require('./routes/speciesRouter')
const allowedOrigins = [
   'http://localhost:5173',
   'https://mh6-monsters-frontend.onrender.com'  
 ];
 
 const corsOptions = {
   origin: allowedOrigins,
 };
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions))
require('dotenv').config()

app.use('/monsters', monstersRouter)
app.use('/species', speciesRouter)

app.listen(process.env.PORT, () => {
   console.log('Listening on port:', process.env.PORT);
})

