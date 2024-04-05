const express = require("express");
const { addAboutpage, getAboutUpdateForm } = require("../controllers/cms/cms.controller");
const cmsRouter = express.Router();

cmsRouter.post('/addabout',addAboutpage);
cmsRouter.get('/edit-about/:id',getAboutUpdateForm);
// cmsRouter.post('/edit-about/:id',EditHomePage);

module.exports = {cmsRouter};