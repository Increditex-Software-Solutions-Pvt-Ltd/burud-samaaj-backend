const jwt = require('jsonwebtoken');
const { User } = require('../models/user.model');
const { Userprofile } = require('../models/userprofile.model');

const userActions = {
    checkLoggedIn: async (req, res, next) => {
        try {
            const token = req.cookies.userJwt;
            
            if (token) {
                res.redirect('/')
            }
            else {
                next();
            }
        } catch (error) {
            console.error('Error executing Sequelize query: ', error);
            res.status(500).send('Internal Server Error');
        }

    },
    checkLogged: async (req, res, next) => {
        try {
            const id = req.params.id;
            const user = await Userprofile.findOne({where:{id}})
            const token = req.cookies.userJwt;

            if (token) {
                res.cookie('profileId', user.userId, { httpOnly: true, secure: true });
                next();
            }
            else {
                res.redirect('/login')
            }
        } catch (error) {
            console.error('Error executing Sequelize query: ', error);
            res.status(500).send('Internal Server Error');
        }

    },
    verifyOtp: async (req, res, next) => {
        try {
            const otp = req.cookies.signupOtp;
            const userEntered = req.body.enteredOtp
            console.log(otp, userEntered, otp === userEntered);
            if (otp === userEntered) {
                res.send({ message: "Verified Successfully" });
                // next();
            }
            else {
                // return res.send({ message: "Invalid Otp" });
                return res.redirect('/otpform');
            }
        } catch (error) {
            console.error('Error executing Sequelize query: ', error);
            return res.status(500).send('Internal Server Error');
        }

    },
    checkprofileExist:async(req,res)=>{
        try {
            const token = req.cookies.userJwt;
            const profileId = req.cookies.profileId;
    
            if (token && profileId) {
                const userProfile = await Userprofile.findOne({ where: { id: profileId } });
                if (userProfile) {
                    // User has a profile, proceed to the next middleware
                    next();
                } else {
                    // User does not have a profile
                    res.redirect('/createprofile'); 
                }
            } else {
                // No token or profileId, redirect user to login page
                res.redirect('/');
            }
        } catch (error) {
            console.error('Error executing Sequelize query: ', error);
            res.status(500).send('Internal Server Error');
        }
    }

}

module.exports = { userActions }