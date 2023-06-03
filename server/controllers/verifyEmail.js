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
    subject: "Verify OTP",
    html: `
    <div style={{ fontFamily: 'Helvetica, Arial, sans-serif', minWidth: '1000px', overflow: 'auto', lineHeight: '2' }}>
      <div style={{ margin: '50px auto', width: '70%', padding: '20px 0' }}>
        <div style={{ borderBottom: '1px solid #eee' }}>
          <a href="" style={{ fontSize: '1.4em', color: '#00466a', textDecoration: 'none', fontWeight: 600 }}>
            AchieveMATE
          </a>
        </div>
        <p style={{ fontSize: '1.1em' }}>Hi,</p>
        <p>
          Thank you for registering with AchieveMATE. Use the following OTP to complete your Sign Up procedures. OTP is
          valid for 5 minutes
        </p>
        <h2
          style={{
            background: '#00466a',
            margin: '0 auto',
            width: 'max-content',
            padding: '0 10px',
            color: '#fff',
            borderRadius: '4px',
          }}
        >
          ${otp}
        </h2>
        <p style={{ fontSize: '0.9em' }}>
          Regards,
          <br />
          AchieveMATE
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid #eee' }} />
      </div>
    </div>
    `,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
      return res.status(401).send({ message: "some problem sending email!" });
    } else {
      console.log("Email sent successfully");
      return res.status(200).send({ message: "Email sent successfully" });
    }
  });
};

module.exports = { sendOtp };
