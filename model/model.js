const mongoose=require('mongoose');

var schema=new mongoose.Schema({
    description:{
        type: String,
        required: true
    }
})

const Feedbackdb = mongoose.model('feedbackdb',schema)

module.exports=Feedbackdb;