const mongoose = require('mongoose');

var districtSchema = new mongoose.Schema({
    code:{
        type:String,
        required: true
    }
});


mongoose.model('Districts', districtSchema);