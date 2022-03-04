require('dotenv').config()

var cors = require('cors')
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:admin123@cluster0.gf0nw.mongodb.net/feedbacks?retryWrites=true&w=majority", {
    useNewUrlParser:true,keepAlive: true, keepAliveInitialDelay: 300000
}).catch(err => console.error(err));

const db = mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',()=>console.log("Connected to Database"))

const port = process.env.PORT || 8000;
 
app.use(cors())
app.use(express.json())

// load routes
app.use('/',require('./routes/router'))

app.listen(port, () => console.log(`Listening on port ${port}...`));