require('dotenv').config();
const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { Userprofile } = require('../models/userprofile.model');
const { Userphoto } = require('../models/userphotos.model');
const { otpGen } = require('otp-gen-agent');
const nodemailer = require('nodemailer');

const userController = {
    gethome: async (req, res) => {

        try {
            // Check if the user is authenticated
            const token = req.cookies.userJwt;

            if (token) {
                try {

                    const decoded = jwt.verify(token, process.env.user_secret_key);
                    const userId = decoded.userId;


                    const user = await User.findOne({ where: { id: userId } });
                    const userprofile = await Userprofile.findOne({ where: { userId } })
                    if (user) {

                        return res.render('index', { user, userprofile });
                    }
                } catch (err) {

                    console.error('Token verification error:', err);
                }
            }

            return res.render('index', { user: null }); // Render without user information
        } catch (error) {
            console.error('Error executing Sequelize query: ', error);
            res.status(500).send('Internal Server Error');
        }

    },
    getsignupform: (req, res) => {
        return res.render('signup');
    },
    getloginform: (req, res) => {
        return res.render('login');
    },

    getUploadphotopage: async (req, res) => {
        try {
            // Check if the user is authenticated
            const token = req.cookies.userJwt;

            if (token) {
                try {

                    const decoded = jwt.verify(token, process.env.user_secret_key);
                    const userId = decoded.userId;


                    const user = await User.findOne({ where: { id: userId } });
                    const userprofile = await Userprofile.findOne({ where: { userId } })
                    if (user) {

                        return res.render('uploadphoto', { user, userprofile });
                    }
                } catch (err) {

                    console.error('Token verification error:', err);
                }
            }

            return res.render('uploadphoto', { user: null }); // Render without user information
        } catch (error) {
            console.error('Error executing Sequelize query: ', error);
            res.status(500).send('Internal Server Error');
        }
    },
    getprofilepage: async (req, res) => {
        try {
            // Check if the user is authenticated
            const token = req.cookies.userJwt;

            if (token) {
                try {

                    const decoded = jwt.verify(token, process.env.user_secret_key);
                    const userId = decoded.userId;

                    const user = await User.findOne({ where: { id: userId } });
                    const userprofile = await Userprofile.findOne({ where: { userId } })

                    const userRecords = await Userprofile.findAll({
                        include: [
                            {
                                model: Userphoto,
                                as: 'userImage'
                            }
                        ]
                    })
                    if (user) {

                        return res.render('profile', { user, userprofile, userRecords });
                    }
                } catch (err) {

                    console.error('Token verification error:', err);
                }
            }

            return res.render('profile', { user: null }); // Render without user information
        } catch (error) {
            console.error('Error executing Sequelize query: ', error);
            res.status(500).send('Internal Server Error');
        }
    },
    getdetailprofile: async (req, res) => {
        try {
            const profileId = req.params.id;

            const profile = await Userprofile.findByPk(profileId, {
                include: {
                    model: Userphoto,
                    as: 'userImage'
                }
            });

            if (!profile) {
                return res.status(404).send('Profile not found');
            }
            else {
                return res.render('detailprofile', { profile });
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
            res.status(500).send('Internal Server Error');
        }
    },
    getEditProfilepage: async (req, res) => {
        try {
            // Check if the user is authenticated
            const token = req.cookies.userJwt;

            if (token) {
                try {

                    const decoded = jwt.verify(token, process.env.user_secret_key);
                    const userId = decoded.userId;


                    const user = await User.findOne({ where: { id: userId } });
                    const userprofile = await Userprofile.findOne({ where: { userId } })
                    if (user) {

                        return res.render('editprofile', { user, userprofile });
                    }
                } catch (err) {

                    console.error('Token verification error:', err);
                }
            }

            return res.render('editprofile', { user: null }); // Render without user information
        } catch (error) {
            console.error('Error executing Sequelize query: ', error);
            res.status(500).send('Internal Server Error');
        }

    },

    getserach: async (req, res) => {
        try {
            // Check if the user is authenticated
            const token = req.cookies.userJwt;

            if (token) {
                try {

                    const decoded = jwt.verify(token, process.env.user_secret_key);
                    const userId = decoded.userId;


                    const user = await User.findOne({ where: { id: userId } });
                    const userprofile = await Userprofile.findOne({ where: { userId } })
                    if (user) {

                        return res.render('search', { user, userprofile });
                    }
                } catch (err) {

                    console.error('Token verification error:', err);
                }
            }

            return res.render('search', { user: null }); // Render without user information
        } catch (error) {
            console.error('Error executing Sequelize query: ', error);
            res.status(500).send('Internal Server Error');
        }
    },
    getsuccessStories: async (req, res) => {
        try {
            // Check if the user is authenticated
            const token = req.cookies.userJwt;

            if (token) {
                try {

                    const decoded = jwt.verify(token, process.env.user_secret_key);
                    const userId = decoded.userId;


                    const user = await User.findOne({ where: { id: userId } });
                    const userprofile = await Userprofile.findOne({ where: { userId } })
                    if (user) {

                        return res.render('success-stories', { user, userprofile });
                    }
                } catch (err) {

                    console.error('Token verification error:', err);
                }
            }

            return res.render('success-stories', { user: null }); // Render without user information
        } catch (error) {
            console.error('Error executing Sequelize query: ', error);
            res.status(500).send('Internal Server Error');
        }
    },
    getsuccessVideos: async (req, res) => {
        try {
            // Check if the user is authenticated
            const token = req.cookies.userJwt;

            if (token) {
                try {

                    const decoded = jwt.verify(token, process.env.user_secret_key);
                    const userId = decoded.userId;


                    const user = await User.findOne({ where: { id: userId } });
                    const userprofile = await Userprofile.findOne({ where: { userId } })
                    if (user) {

                        return res.render('success-videos', { user, userprofile });
                    }
                } catch (err) {

                    console.error('Token verification error:', err);
                }
            }

            return res.render('success-videos', { user: null }); // Render without user information
        } catch (error) {
            console.error('Error executing Sequelize query: ', error);
            res.status(500).send('Internal Server Error');
        }
    },
    getaboutpage: async (req, res) => {
        try {
            // Check if the user is authenticated
            const token = req.cookies.userJwt;

            if (token) {
                try {

                    const decoded = jwt.verify(token, process.env.user_secret_key);
                    const userId = decoded.userId;


                    const user = await User.findOne({ where: { id: userId } });
                    const userprofile = await Userprofile.findOne({ where: { userId } })
                    if (user) {

                        return res.render('about', { user, userprofile });
                    }
                } catch (err) {

                    console.error('Token verification error:', err);
                }
            }

            return res.render('about', { user: null }); // Render without user information
        } catch (error) {
            console.error('Error executing Sequelize query: ', error);
            res.status(500).send('Internal Server Error');
        }
    },
    signup: async (req, res) => {
        // let errorsArr = [];

        // if (!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.phone || !req.body.password || !req.body.confirmpassword || !req.body.dateofbirth) {

        //     // req.flash("error", "All fields are required");
        //     return res.redirect('/signup');
        // }

        // let validationError = validationResult(req);
        // if (!validationError.isEmpty()) {
        //     let error = Object.values(validationError.mapped());

        //     error.forEach((item) => {
        //         errorsArr.push(item.msg);
        //     })
        //     req.flash("error", errorsArr);

        // }
        try {
            const data = JSON.parse(sessionStorage.getItem("signupObj"));
            console.log(data);
            const userExist = await User.findOne({
                where: {
                    email: data.email
                }
            });
            if (userExist) {
                res.status(300).send({ "message": "User Alrady exist!" })
            }
            else {
                const saltRounds = 10;
                const hashPassword = await bcrypt.hash(data.password, saltRounds);
                const createUser = {
                    ...data,
                    password: hashPassword
                }
                const newuser = await User.create(createUser);
                // res.status(200).send({ "message": "New user created", newuser })
                req.flash("success", "Registration successfull! Please log in.", newuser);
                return res.redirect('/login');
            }

        } catch (error) {

            res.status(404).send({ "message": "Error", error })
        }



    },
    login: async (req, res) => {
        try {
            let credentials = req.body;

            // Taking user info from DB
            let userInDb = await User.findOne({ where: { email: credentials.email } });

            // Checking whether the user exists in the database
            if (!userInDb) {
                // Redirect to login page with an error message
                req.flash("error", "User not found with this email");
                return res.redirect('/login');
            }


            bcrypt.compare(credentials.password, userInDb.password, function (err, result) {
                if (result) {

                    let token = jwt.sign({ userId: userInDb.id }, `${process.env.user_secret_key}`);

                    res.cookie('userJwt', token, { httpOnly: true, secure: true });
                    res.cookie('userId', userInDb.id, { httpOnly: true, secure: true });

                    return res.redirect('/');
                } else {

                    req.flash("error", "Invalid credentials");
                    return res.redirect('/login');
                }
            });
        } catch (error) {
            // Redirect to login page with an error message

            return res.redirect('/login');
        }
    },
    userlogout: (req, res) => {
        res.clearCookie('userJwt');
        res.clearCookie('userId');
        res.redirect('/');
    },
    sendRequest: async (req, res) => {
        try {
            const userId = req.cookies.userId;
            const profileId = req.cookies.profileId;

            // Find the sender and receiver users in the database
            const sender = await User.findByPk(userId);
            const receiver = await User.findByPk(profileId);

            if (!sender || !receiver) {
                throw new Error('Sender or receiver not found');
            }


            // Initialize receiver's friendRequests object if not already initialized
            receiver.friendRequests = receiver.friendRequests || { sent: [], received: [] };

            // Add sender's ID to receiver's friendRequests.received array if not already present
            if (!receiver.friendRequests.received.includes(userId)) {
                receiver.friendRequests.received.push(userId);
                // Save changes to the receiver user in the database
                await receiver.save();
            }

            res.send({ "message": "Friend request sent successfully" });
        } catch (error) {
            console.error('Error sending friend request:', error);
            res.status(500).send({ "error": "Internal Server Error" });
        }
    },
    getOtpform: async (req, res) => {
        return res.render('otpform');
    },
    sendOtp: async (req, res, next) => {
        try {
            const { email } = req.body;

            const userData = req.body
            console.log(userData);
            // const user = await User.findOne({ email: email })

            const otp = await otpGen(); // '344156'  (OTP length is 6 digit by default)
            if (email) {

                const EMAIL_PASS = process.env.EMAIL_PASS;

                const transporter = await nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'nishantphule12@gmail.com',
                        pass: EMAIL_PASS
                    }
                });

                const mailOptions = {
                    from: 'nishantphule12@gmail.com', // sender address
                    to: email, // list of receivers
                    text: ` Your One Time Password for Registeration is ${otp}`,
                };

                await transporter.sendMail(mailOptions, function (err, info) {
                    if (err)
                        console.log(err)
                    else
                        console.log(info);
                });

                console.log(otp)
                res.cookie('signupOtp', otp, { httpOnly: true, secure: true });
                // sessionStorage.setItem("signupObj", JSON.stringify(req.body))
                return res.status(201).json({ message: 'Check your email', userData });
                // next()
                // return res.redirect('/otpform')
            }
            else {
                res.status(504).json({ message: 'Invalid Email' });
            }
        } catch (error) {
            res.status(504).json({ message: 'Internal Server Error' });
        }

    },


}

module.exports = userController;