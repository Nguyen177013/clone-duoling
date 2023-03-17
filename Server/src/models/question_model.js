const mongoose = require('mongoose');
const Questions = new mongoose.Schema({
    question:{
        type: 'String',
        required: true
    },
    options:{
        type:["Object"],                
        required: true
    },
    type:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
        ref:"Types"
    },
})

module.exports=mongoose.model('questions', Questions);