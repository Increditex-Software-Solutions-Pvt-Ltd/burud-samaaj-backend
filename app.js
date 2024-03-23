require("dotenv").config()
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const twilio = require('twilio');
const flash = require('connect-flash');
const userRouter = require("./routes/user.router");
const configViewEngine = require("./viewEngine");
const session = require('express-session');
const cookieParser = require('cookie-parser');

const port = process.env.PORT;

const app = express();

const accountSid = 'ACYOUR_ACCOUNT_SID';
const authToken = 'YOUR_AUTH_TOKEN';
const twilioClient = twilio(accountSid, authToken);


app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

app.post('/send-otp', (req, res) => {
    const { phoneNumber } = req.body;
    const otp = generateOTP(); // Implement your own OTP generation logic
  
    // Send OTP via Twilio
    twilioClient.messages.create({
      body: `Your OTP is: ${otp}`,
      to: phoneNumber,
      from: 'YOUR_TWILIO_PHONE_NUMBER'
    })
    .then(message => {
      console.log(`OTP sent: ${otp}`);
      res.json({ success: true, message: 'OTP sent successfully.' });
    })
    .catch(error => {
      console.error('Error sending OTP:', error);
      res.status(500).json({ success: false, message: 'Failed to send OTP.' });
    });
  });
  
  // OTP verification
  app.post('/verify-otp', (req, res) => {
    const { otp, enteredOTP } = req.body;
  
    // Compare entered OTP with the generated OTP
    if (otp === enteredOTP) {
      res.json({ success: true, message: 'OTP verified successfully.' });
    } else {
      res.status(400).json({ success: false, message: 'Invalid OTP.' });
    }
  });

configViewEngine(app);



app.use(session({
  secret: 'your-secret-key',
  resave: true,
  saveUninitialized: true
}));

app.use(flash());


app.use((req, res, next) => {
    res.locals.messages = req.flash();
    next();
});

app.use('/',userRouter)

app.listen(port,()=>{
    console.log(`app is running on http://localhost:${port}`);
})

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }