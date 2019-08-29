const mongoose = require('mongoose');
const States = mongoose.model('States');

module.exports.states = (req, res, next) => {
    
    States.find({},function(err,data){
        res.send(data);
    });
}