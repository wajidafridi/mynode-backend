var cors = require('cors')
const express = require('express')
const app = express()
const mongoose = require('mongoose')



const db = mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',()=>console.log("Connected to Database"))

const port = process.env.PORT || 8000;
 
app.use(cors())
app.use(express.json())

// load routes
app.use('/',require('./routes/router'))

app.listen(port, () => console.log(`Listening on port ${port}...`));