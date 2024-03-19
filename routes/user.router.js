const express = require("express");
const userController = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.get('/',userController.gethome);
userRouter.get('/profile',userController.getprofilepage);
userRouter.get('/detailprofile',userController.getdetailprofile);
userRouter.get('/createprofile',userController.getcreateprofile);


userRouter.get('/signup',userController.getsignupform);
userRouter.post('/signup',userController.signup);

userRouter.get('/login',userController.getloginform);
userRouter.post('/login',userController.login);


module.exports = userRouter;
