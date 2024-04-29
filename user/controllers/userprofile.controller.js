const { upload } = require('../../config/multerconfig');
const { User } = require('../models/user.model');
const { Userphoto } = require('../models/userphotos.model');
const { Userprofile } = require('../models/userprofile.model');
const jwt = require('jsonwebtoken');

const getCreateProfile=async(req,res)=>{
    const token = req.cookies.userJwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.user_secret_key);
            const userId = decoded.userId;


            const user = await User.findOne({ where: { id: userId } });
            const userprofile = await Userprofile.findOne({ where: { userId },include:[
                {
                    model: Userphoto,
                    as: 'userImage'
                }
            ] })
            if (userprofile) {
                return res.render('dashboard', { user, userprofile });
            }
            else{
                return res.render('createprofile', { user: null }); 
            }
        } catch (err) {

            console.error('Token verification error:', err);
        }
    }

    return res.render('login'); 
}

const getUserDashboard=async(req,res)=>{
    const token = req.cookies.userJwt;

    if (token) {
        try {

            const decoded = jwt.verify(token, process.env.user_secret_key);
            const userId = decoded.userId;
            
            const user = await User.findOne({ where: { id: userId } });
            const userprofile = await Userprofile.findOne({ where: { userId },include:[
                {
                    model: Userphoto,
                    as: 'userImage'
                }
            ] })

        
            if (user) {
                 
                return res.render('dashboard', { user, userprofile });
            }
        } catch (err) {

            console.error('Token verification error:', err);
        }
    }

    return res.render('dashboard', { user: null }); 
}

async function saveUserProfile(req, res) {
    try {
        let userId = req.cookies.userId;


        // Extract data from the request body
        const {
            profilefor,
            fullname,
            birthname,
            birthplace,
            city,
            dateofbirth,
            timeofbirth,
            address,
            income,
            education,
            bloodgroup,
            spectacles,
            disabled,
            occupation,
            maritalstatus,
            height,
            occupationcity,
            complexion,
            fathername,
            mothername,
            maternaluncle,
            parentaddress,
            expectation,
            familymembers,
            profilevisibility,
            hudda,
            fatheroccupation,
            motheroccupation,
            email,
            mobile
        } = req.body;

        function capitalizeFirstLetters(str) {
            // Split the string into an array of words
            const words = str.split(" ");

            // Iterate through each word in the array
            const capitalizedWords = words.map(word => {
                // Capitalize the first letter of each word and lowercase the rest
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            });

            // Join the capitalized words back into a single string
            return capitalizedWords.join(" ");
        }
        // Save the user profile data to the database
        const userProfile = await Userprofile.create({
            profilefor,
            fullname: capitalizeFirstLetters(fullname),
            birthname,
            birthplace,
            city,
            dateofbirth,
            timeofbirth,
            address,
            income,
            disabled,
            education,
            bloodgroup,
            spectacles,
            occupation,
            maritalstatus,
            height,
            occupationcity,
            complexion,
            fathername,
            mothername,
            maternaluncle,
            parentaddress,
            expectation,
            familymembers,
            hudda,
            fatheroccupation,
            motheroccupation,
            profilevisibility,
            email,
            mobile,
            userId
        });
        // Send a success response
        return res.redirect('/uploadphoto');


    } catch (error) {
        // Handle errors
        console.error('Error saving user profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function editUserProfile(req, res) {
    try {
        let userId = req.cookies.userId

        let userprofile = await Userprofile.findOne({
            where: { userId }
        })
        console.log(userprofile.id, "profile id for update");

        const updateuserProfile = await userprofile.update(req.body);
        updateuserProfile.save()

        return res.redirect('/uploadphoto');

    } catch (error) {
        // Handle errors
        console.error('Error editing user profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const getProfileid = async (req, res) => {
    try {
        console.log("Hii from profile id");
        const id = req.query.id;
        console.log(id,"checking id of user from request");
        const profile = await Userprofile.findOne({ where: { userId: id } })
        console.log(profile,"checking the profile i got from db");
        return res.status(201).send({ profileId: profile.id })

    } catch (error) {
        console.error('Error getting user profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const saveUserImages = async (req, res) => {
    try {
        let userId = req.cookies.userId;
        // Handle profile picture upload
        upload.fields([{ name: 'profilepic', maxCount: 1 }, { name: 'biopicOne', maxCount: 1 }, { name: 'biopicTwo', maxCount: 1 }, { name: 'horoimage', maxCount: 1 }])(req, res, async function (err) {
            if (err) {
                return res.status(400).json({ message: 'Files upload failed.' });
            }
            const profilepic = req.files['profilepic'] ? req.files['profilepic'][0].path : null;
            const biopicOne = req.files['biopicOne'] ? req.files['biopicOne'][0].path : null;
            const biopicTwo = req.files['biopicTwo'] ? req.files['biopicTwo'][0].path : null;
            const horoimage = req.files['horoimage'] ? req.files['horoimage'][0].path : null;

            const newImage = await Userphoto.create({
                profilepic, biopicOne,
                biopicTwo, horoimage
            })

            const userPhotoId = newImage.id;
            await Userprofile.update({ userphoto: userPhotoId }, { where: { userId } })

            return res.redirect('/');
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to upload images' });
    }
};

const updateProfilephotos = async (req, res) => {
    try {
        upload.fields([{ name: 'profilepic', maxCount: 1 }, { name: 'biopicOne', maxCount: 1 }, { name: 'biopicTwo', maxCount: 1 }, { name: 'horoimage', maxCount: 1 }])(req, res, async function (err) {
            if (err) {
                return res.status(400).json({ message: 'File upload failed.' });
            }

            const profileId = req.params.id;
            const profilepic = req.files['profilepic'] ? req.files['profilepic'][0].path : null;
            const biopicOne = req.files['biopicOne'] ? req.files['biopicOne'][0].path : null;
            const biopicTwo = req.files['biopicTwo'] ? req.files['biopicTwo'][0].path : null;
            const horoimage = req.files['horoimage'] ? req.files['horoimage'][0].path : null;

            const profilephoto = await Userphoto.findByPk(profileId);
            console.log(profilephoto);

            if (!profilephoto) {
                return res.status(404).json({ message: 'Profile images not found' });
            }



            if (profilepic) {
                profilephoto.profilepic = profilepic;
            }

            if (biopicOne) {
                profilephoto.biopicOne = biopicOne;
            }
            if (biopicTwo) {
                profilephoto.biopicTwo = biopicTwo;
            }
            if (horoimage) {
                profilephoto.horoimage = horoimage;
            }

            await profilephoto.save();

            return res.redirect('/dashboard');
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to update profile pics' });
    }
};


const checkProfile = async (req, res) => {
    try {
        let userId = req.cookies.userId;
        let findProfile = await Userprofile.findOne({ where: { userId } })
        if (findProfile) {
            res.send({ "message": 'User Profile Found', userId, findProfile })
        }
        else {
            res.send({ "message": 'User Profile Not Found' })
        }
    } catch (error) {
        console.error('Error finding user profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const getAllUserpics = async (req, res) => {
    try {
        const id = parseInt(req.query.id);
        const pics = await Userphoto.findByPk(id);
        console.log(pics);
        if (pics) {
            return res.status(201).send({ pics })
        } else {
            return res.status(404).json({ error: 'profile images not found' });
        }


    } catch (error) {
        console.error('Error getting user profilepics:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const getAllProfiles = async (req, res) => {
    try {
        const userId = req.cookies.userId
        const profiles = await Userprofile.findAll();
        // const profilephoto = await Userphoto.findAll();
        const filteredData = profiles.filter((profile) => profile.userId != userId && profile.profilevisibility === "public")
        res.send({ profiles: filteredData });
    } catch (error) {
        console.error('Error getting user profiles:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const getSingleProfile = async (req, res) => {
    const id = req.cookies.profileId
    try {
        const profile = await Userprofile.findOne({
            where: {
                id: id
            }
        });

        if (profile) {
            return res.status(201).send({ profile })
        } else {
            return res.status(404).json({ error: 'profile not found' });
        }
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({ error: 'Failed to fetch profile' });
    }
}

const getProfileUpdateform = async (req, res) => {
    const { id } = req.params;
    try {
        const userprofileId = await Userprofile.findByPk(id);
        if (userprofileId) {
            res.json({ success: true, data: userprofileId })
        }
        else {
            res.json({ success: false, messae: "user profile not Found" });
        }
    } catch (error) {
        console.error('Error retrieving profile:', error);
        res.status(500).json({ success: false, message: 'Failed to retrieve profile' });
    }
}
const deleteProfile=async(req,res)=>{
    try {
        const profileId = req.params.id;
  
        const profile = await Userprofile.findOne({where:{id:profileId}});
  
        if(!profile){
          return res.status(404).json({ success: false, message: 'profile not found'});
        }
  
        await profile.destroy();
  
        return res.send({message:"successfully deleted profile"})
    } catch (error) {
      console.error('Error deleting profile:', error);
      res.status(500).json({ success: false, message: 'Failed to delete profile' });
    }
  }

module.exports = { saveUserProfile, checkProfile, getAllProfiles, getSingleProfile, saveUserImages, getAllUserpics, getProfileUpdateform, editUserProfile, updateProfilephotos, getProfileid,deleteProfile ,getCreateProfile,getUserDashboard};
