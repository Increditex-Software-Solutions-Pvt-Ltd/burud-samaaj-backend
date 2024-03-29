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



app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));



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

