const mongoose = require('mongoose');

var statesSchema = new mongoose.Schema({
    code:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required: true
    }
});


mongoose.model('States', statesSchema);