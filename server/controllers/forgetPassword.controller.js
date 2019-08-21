var nodemailer = require('nodemailer');
const mongoose = require('mongoose');

const User = mongoose.model('User');
module.exports.reset = (req, res, next) => {
var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: false,
  port: 587,
  auth: {
    user: 'your email id',
    pass: 'your password'
  }
});

var mailOptions = {
  from: 'no-reply@forgetpassword.com',
  to: req.body.email,
  subject: 'Rset Password',
  text: 'Your Pasword is reset to 123456' 
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
        User.updateOne({email: req.body.email},{password:'123456'})
    }
});
}