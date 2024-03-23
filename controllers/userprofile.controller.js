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
            horoimage,
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
            herhisparentresidence
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
            horoimage,
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
            userId
        });
        // Send a success response
        res.status(201).json({ message: 'User profile saved successfully', data: userProfile });
    } catch (error) {
        // Handle errors
        console.error('Error saving user profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

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

module.exports = { saveUserProfile, checkProfile, getAllProfiles, getSingleProfile };
