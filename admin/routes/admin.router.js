const express = require("express");
const { getDashboardpage, getCmspage, getAdminLoginpage, getAdminRegisterpage, handleRegisterAdmin, handleAdminlogin, postLogoutAdmin, getuserspage, getSingleUser,approveUser, rejectUser } = require("../controllers/admin.controller");
const isAdminLoggedIn = require("../middleware/admin.middleware");
const adminRouter = express.Router();

adminRouter.get('/',isAdminLoggedIn,getDashboardpage);
adminRouter.get('/cms',getCmspage);
adminRouter.get('/login',getAdminLoginpage);
adminRouter.get('/register',getAdminRegisterpage);
adminRouter.post('/register-admin',handleRegisterAdmin);
adminRouter.post('/login-admin',handleAdminlogin);
adminRouter.get('/logout-admin',postLogoutAdmin);
adminRouter.get('/users',getuserspage);
adminRouter.get('/get-single-user/:id',getSingleUser);
adminRouter.post("/approveuser",approveUser)
adminRouter.post("/rejectuser",rejectUser);



module.exports = {adminRouter}