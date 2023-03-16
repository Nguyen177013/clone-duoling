const mongoose = require('mongoose');
const Questions = new mongoose.Schema({
    question:{
        type: 'String',
        required: true
    },
    options:{
        type:["String"],
        required: true
    },
    type:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
        ref:"Types"
    },
})

module.exports=mongoose.model('Questions', Questions);