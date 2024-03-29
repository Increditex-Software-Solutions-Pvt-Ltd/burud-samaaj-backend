const express = require("express");
const userController = require("../controllers/user.controller");
const { saveUserProfile, checkProfile, getAllProfiles, getSingleProfile } = require("../controllers/userprofile.controller");
const { userActions } = require("../middleware/user.middleware");
const userRouter = express.Router();

userRouter.get('/', userController.gethome);
userRouter.get('/profile', userController.getprofilepage);
userRouter.get('/detailprofile/:id', userActions.checkLogged, userController.getdetailprofile);
// userRouter.get('/createprofile',userController.getcreateprofile);
userRouter.get('/search', userController.getserach);
userRouter.get('/about', userController.getaboutpage);
userRouter.get('/success-stories', userController.getsuccessStories);
userRouter.get('/success-videos', userController.getsuccessVideos);


userRouter.get('/signup', userActions.checkLoggedIn, userController.getsignupform);
userRouter.post('/signup', userController.signup);

userRouter.get('/login', userActions.checkLoggedIn, userController.getloginform);
userRouter.post('/login', userController.login);
userRouter.get('/logout', userController.userlogout);

userRouter.post('/addprofile', saveUserProfile);
userRouter.get('/checkprofile', checkProfile);
userRouter.get('/allprofiles', getAllProfiles);
userRouter.get('/getsingleprofile', getSingleProfile);

userRouter.put('/sendRequest', userController.sendRequest)

module.exports = userRouter;
