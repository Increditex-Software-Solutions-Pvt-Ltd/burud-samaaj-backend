const express = require("express");
const { addAboutpage, getAboutUpdateForm, addMember, getMemberUpdateForm, updateAbout, updateMember, deleteMember, addSuccessStory, getStoryUpdateForm, updateStory, deleteStory } = require("../controllers/cms/cms.controller");
const cmsRouter = express.Router();

cmsRouter.post('/addabout',addAboutpage);
cmsRouter.get('/edit-about/:id',getAboutUpdateForm);
cmsRouter.post('/edit-about/:id',updateAbout);


cmsRouter.post('/addmember',addMember);
cmsRouter.get('/member/:id',getMemberUpdateForm);
cmsRouter.post('/member/:id',updateMember);
cmsRouter.post('/delete-member/:id',deleteMember);

cmsRouter.post('/addstory',addSuccessStory);
cmsRouter.get('/story/:id',getStoryUpdateForm);
cmsRouter.post('/story/:id',updateStory);
cmsRouter.post('/delete-story/:id',deleteStory);


module.exports = {cmsRouter};