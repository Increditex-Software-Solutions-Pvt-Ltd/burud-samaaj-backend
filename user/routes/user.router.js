const express = require("express");
const userController = require("../controllers/user.controller");
const { saveUserProfile, checkProfile, getAllProfiles, getSingleProfile, saveUserImages, getAllUserpics, getProfileUpdateform, editUserProfile, updateProfilephotos, getProfileid, deleteProfile, getCreateProfile, getUserDashboard } = require("../controllers/userprofile.controller");
const { userActions } = require("../middleware/user.middleware");
const userRouter = express.Router();

userRouter.get('/', userController.gethome);
userRouter.get('/profile', userController.getprofilepage);
userRouter.get('/detailprofile/:id', userActions.checkLogged, userController.getdetailprofile);
userRouter.get('/viewpdf/:id', userActions.checkLogged,userController.getviewpdf);
// userRouter.get('/createprofile',userController.getcreateprofile);
userRouter.get('/search', userController.getserach);
userRouter.get('/about', userController.getaboutpage);
userRouter.get('/uploadphoto', userController.getUploadphotopage)
userRouter.get('/success-stories', userController.getsuccessStories);
userRouter.get('/profiles/:id', userController.getEditProfilepage);
userRouter.get('/photos/:id', userController.getEditPhotospage);
userRouter.get('/success-videos', userController.getsuccessVideos);
userRouter.get("/requests", userController.getRequestsPage);
userRouter.get("/connections", userController.getConnectionsPage);


userRouter.get('/signup', userActions.checkLoggedIn, userController.getsignupform);
userRouter.post('/signup', userController.signup);

userRouter.get('/login', userActions.checkLoggedIn, userController.getloginform);
userRouter.post('/login', userController.login);
userRouter.get('/logout', userController.userlogout);

userRouter.get('/emailReset', userController.getResetEmailform);
userRouter.post('/sendResetLink', userController.sendResetLink);
userRouter.get('/resetpassword', userController.resetPassCheck)
userRouter.get('/updatepasswordform/:id', userController.getupdatePassform)
userRouter.post('/updatepassword', userController.updatePassword)

userRouter.get('/createprofile',getCreateProfile);
userRouter.get('/dashboard',getUserDashboard);
userRouter.post('/addprofile', saveUserProfile);
userRouter.post('/addimages', saveUserImages);
userRouter.get('/checkprofile', checkProfile);
userRouter.get('/allprofiles', getAllProfiles);
userRouter.get('/getsingleprofile', getSingleProfile);
userRouter.get('/getuserphotos', getAllUserpics);
userRouter.post('/editprofile', editUserProfile);
userRouter.post('/editphotos/:id', updateProfilephotos);


userRouter.put('/sendRequest', userController.sendRequest);
userRouter.post('/sendOtp', userController.sendOtp);
userRouter.get('/otpform', userController.getOtpform)
userRouter.post('/verifyOtp', userActions.verifyOtp);
userRouter.get('/checkfriendrequests', userController.checkFriendRequests);
userRouter.post('/handleAccept', userController.handleReqAccept);
userRouter.post('/handleReject', userController.handleReqReject);
userRouter.get('/getListofRequests', userController.getListofRequests);
userRouter.get('/getListofConections', userController.getListofConections);
userRouter.get("/getProfileid", getProfileid);
userRouter.post("/delete-profile/:id", deleteProfile);

module.exports = userRouter;
