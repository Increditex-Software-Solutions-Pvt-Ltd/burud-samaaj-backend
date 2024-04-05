const { uploadMember } = require("../../../config/multerconfig");
const { About } = require("../../models/Aboutcms.model");
const { Member } = require("../../models/Membercms.model");
const { Successstory } = require("../../models/Successstory.model");

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
const updateAbout = async (req, res) => {
   let aboutId = req.params.id;
   try {
       const about = await About.findByPk(aboutId);
       if (about) {
           const updatedAbout = await about.update(req.body);
           updatedAbout.save();
           res.redirect('/admin/cms');
       }
       else {
           res.json({ success: false, message: 'about not found' });
       }
   } catch (error) {
       console.error('Error updating about:', error);
       res.status(500).json({ success: false, message: 'Failed to update about' });
   }
}
 const getMemberUpdateForm=async(req,res)=>{

    const {id} = req.params;
   try {
       const members = await Member.findByPk(id);
       
       if(members){
         res.json({success:true,data:members})
       }
       else{
        res.json({success:false,message:"member not found"});
       }
   } catch (error) {
    console.error('Error updating member', error);
    res.status(500).json({ success: false, message: 'Failed to update member' });
   }
}


const addMember=async(req,res)=>{
   try {
      uploadMember.single('memberpic')(req, res, async function (err) {
              if (err) {
                  return res.status(400).json({ message: 'member pic upload failed' });
              }
  
          
              const { membername,position } = req.body;
              const memberpic = req.file ? req.file.path : null;
  
              const newMember = await Member.create({
                 membername,memberpic,position
              });
  
              return res.redirect('/admin/cms'); 
          });
      } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Failed to add YouTube video' });
      }
}
const updateMember = async (req, res) => {
   try {
      const memberId = req.params.id;

      // Assuming you have a function like `findById` to find the YouTube video by ID
      const existingMember = await Member.findByPk(memberId);

      if (!existingMember) {
          return res.status(404).json({ message: 'member not found' });
      }

      uploadMember.single('memberpic')(req, res, async function (err) {
          if (err) {
              return res.status(400).json({ message: 'file upload failed' });
          }

          const { membername,position } = req.body;

          // Check if a new thumbnail file is uploaded
          if (req.file) {
              existingMember.memberpic = req.file.path;
          }

          existingMember.membername = membername;
          existingMember.position = position;

          await existingMember.save();

          return res.redirect('/admin/cms'); // Redirect to appropriate page
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to update member video' });
  }
}

const deleteMember=async(req,res)=>{
   try {
       const memberId = req.params.id;
 
       const member = await Member.findByPk(memberId);
 
       if(!member){
         return res.status(404).json({ success: false, message: 'member not found'});
       }
 
       await member.destroy();
 
       return res.redirect("/admin/cms")
   } catch (error) {
     console.error('Error deleting member:', error);
     res.status(500).json({ success: false, message: 'Failed to delete member' });
   }
 }


 const addSuccessStory=async(req,res)=>{
   try {
      uploadMember.single('weddingpic')(req, res, async function (err) {
              if (err) {
                  return res.status(400).json({ message: 'wedding pic upload failed' });
              }
  
          
              const { groomname,bridename,city,description } = req.body;
              const weddingpic = req.file ? req.file.path : null;
  
              const newStory = await Successstory.create({
                 groomname,bridename,city,description,weddingpic
              });
  
              return res.redirect('/admin/cms'); 
          });
      } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Failed to add Success story' });
      }
 }

 const getStoryUpdateForm=async(req,res)=>{

   const {id} = req.params;
  try {
      const stories = await Successstory.findByPk(id);
      
      if(stories){
        res.json({success:true,data:stories})
      }
      else{
       res.json({success:false,message:"success story not found"});
      }
  } catch (error) {
   console.error('Error updating story', error);
   res.status(500).json({ success: false, message: 'Failed to update story' });
  }
}


const updateStory = async (req, res) => {
   try {
      const storyId = req.params.id;

      // Assuming you have a function like `findById` to find the YouTube video by ID
      const existingStory = await Successstory.findByPk(storyId);

      if (!existingStory) {
          return res.status(404).json({ message: 'story not found' });
      }

      uploadMember.single('weddingpic')(req, res, async function (err) {
          if (err) {
              return res.status(400).json({ message: 'file upload failed' });
          }

          const { bridename,groomname,city,description } = req.body;

          // Check if a new thumbnail file is uploaded
          if (req.file) {
              existingStory.weddingpic = req.file.path;
          }

          existingStory.bridename = bridename;
          existingStory.groomname = groomname;
          existingStory.city = city;
          existingStory.description = description;

          await existingStory.save();

          return res.redirect('/admin/cms'); // Redirect to appropriate page
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to update member video' });
  }
}

const deleteStory=async(req,res)=>{
   try {
       const storyId = req.params.id;
 
       const story = await Successstory.findByPk(storyId);
 
       if(!story){
         return res.status(404).json({ success: false, message: 'story not found'});
       }
 
       await story.destroy();
 
       return res.redirect("/admin/cms")
   } catch (error) {
     console.error('Error deleting story:', error);
     res.status(500).json({ success: false, message: 'Failed to delete story' });
   }
 }

 module.exports = {addAboutpage,getAboutUpdateForm,addMember,getMemberUpdateForm,updateMember,updateAbout,deleteMember,addSuccessStory,getStoryUpdateForm,updateStory,deleteStory}