const mongoose = require('mongoose');
const District = mongoose.model('Districts');

module.exports.district = (req, res, next) => {
    let code = req.body.code;
    console.log(code)
    District.findOne({code:code},function(err,data){
        res.send(data);
    });
}