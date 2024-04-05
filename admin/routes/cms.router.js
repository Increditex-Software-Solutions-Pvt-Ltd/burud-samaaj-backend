const express = require("express");
const { addAboutpage, getAboutUpdateForm, addMember, getMemberUpdateForm, updateAbout, updateMember, deleteMember } = require("../controllers/cms/cms.controller");
const cmsRouter = express.Router();

cmsRouter.post('/addabout',addAboutpage);
cmsRouter.get('/edit-about/:id',getAboutUpdateForm);
cmsRouter.post('/edit-about/:id',updateAbout);
cmsRouter.post('/addmember',addMember);
cmsRouter.get('/member/:id',getMemberUpdateForm);
cmsRouter.post('/member/:id',updateMember);
cmsRouter.post('/delete-member/:id',deleteMember);
// cmsRouter.post('/edit-about/:id',EditHomePage);

module.exports = {cmsRouter};