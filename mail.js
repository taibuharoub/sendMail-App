const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");


//Set up an account with mailgun for your api-key and domain
const auth = {
  auth: {
    api_key: "<your api-key>",
    domain: "<your mail-gun domain>",
  }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: "<your mailgun subcribed email address>",
        subject: subject,
        text: text
      };
      
      transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
          cb(err, null);
        } else {
          cb(null, data);
        }
      });
}

module.exports = sendMail;