const { About } = require("../../models/Aboutcms.model");

const addAboutpage=async(req,res)=>{
    try { 
       const formData = req.body;
      
       const aboutrecord = await About.create({
          aboutwebsite:formData.aboutwebsite,
          adhykshmanogat:formData.adhykshmanogat,
          sachivmanogat:formData.sachivmanogat       
       })
      
     
       res.redirect('/admin/cms');
    } catch (error) {
         console.error('Error adding about page:', error);
         res.status(500).send('Internal Server Error');
    }
 }

 const getAboutUpdateForm=async(req,res)=>{

    const {id} = req.params;
   try {
       const aboutcontent = await About.findByPk(id);
       
       if(aboutcontent){
         res.json({success:true,data:aboutcontent})
       }
       else{
        res.json({success:false,message:"aboutrecord not found"});
       }
   } catch (error) {
    console.error('Error updating aboutcontent', error);
    res.status(500).json({ success: false, message: 'Failed to update aboutcontent' });
   }
}

 module.exports = {addAboutpage,getAboutUpdateForm}