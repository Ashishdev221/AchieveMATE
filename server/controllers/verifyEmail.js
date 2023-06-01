const nodemailer = require("nodemailer");

const sendOtp = async (req, res) => {
  const { email, otp } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });

  let mailOptions = {
    from: "achievematectae@gmail.com",
    to: email,
    subject: "AchieveMATE",
    text: `Verify you identity   OTP: ${otp}`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
      return res.status(401).send({ message: "some problem sending email!" })
    } else {
      console.log("Email sent successfully");
      return res.status(200).send({ message: "Email sent successfully" })
    }
  });

};

module.exports = { sendOtp };
