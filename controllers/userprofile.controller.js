const {upload} = require('../config/multerconfig');
const { Userphoto } = require('../models/userphotos.model');
const { Userprofile } = require('../models/userprofile.model');


async function saveUserProfile(req, res) {
    try {
        let userId = req.cookies.userId;


        // Extract data from the request body
        const {
            profilefor,
            fullname,
            city,
            dateofbirth,
            income,
            education,
            bloodgroup,
            spectacles,
            gotra,
            birthplace,
            occupation,
            maritalstatus,
            height,
            occupationcity,
            complexion,
            mangal,
            residentcity,
            fathername,
            mothername,
            maternaluncle,
            nativeplace,
            citywealth,
            parentcity,
            sister,
            agedifference,
            preferredcity,
            expectedheight,
            herhiseducation,
            herhisoccupation,
            herhisparentresidence,
            email,
            mobile
        } = req.body;


        // Save the user profile data to the database
        const userProfile = await Userprofile.create({
            profilefor,
            fullname,
            city,
            dateofbirth,
            income,
            education,
            bloodgroup,
            spectacles,
            gotra,
            birthplace,
            occupation,
            maritalstatus,
            height,
            occupationcity,
            complexion,
            mangal,
            residentcity,
            fathername,
            mothername,
            maternaluncle,
            nativeplace,
            citywealth,
            parentcity,
            sister,
            agedifference,
            preferredcity,
            expectedheight,
            herhiseducation,
            herhisoccupation,
            herhisparentresidence,
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

const saveUserImages = async (req, res) => {
    try {
        let userId = req.cookies.userId;
        // Handle profile picture upload
        upload.fields([{ name: 'profilepic', maxCount: 1 }, { name: 'biopic1', maxCount: 1 },{ name: 'biopic2', maxCount: 1 },{ name: 'horoimage', maxCount: 1 }])(req, res, async function (err) {
            if (err) {
                return res.status(400).json({ message: 'Files upload failed.' });
            }
            const profilepic = req.files['profilepic'] ? req.files['profilepic'][0].path : null;
            const biopic1 = req.files['biopic1'] ? req.files['biopic1'][0].path : null;
            const biopic2 = req.files['biopic2'] ? req.files['biopic1'][0].path : null;
            const horoimage = req.files['horoimage'] ? req.files['horoimage'][0].path : null;

            const newImage = await Userphoto.create({
                profilepic,biopic1,biopic2,horoimage
            })

            const userPhotoId = newImage.id;
            await Userprofile.update({userphoto:userPhotoId},{ where: { userId }})

            return res.redirect('/');
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to upload images' });
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

const getAllProfiles = async (req, res) => {
    try {
        const userId = req.cookies.userId
        const profiles = await Userprofile.findAll();
        const filteredData = profiles.filter((profile) => profile.userId != userId)
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

module.exports = { saveUserProfile, checkProfile, getAllProfiles, getSingleProfile,saveUserImages };
