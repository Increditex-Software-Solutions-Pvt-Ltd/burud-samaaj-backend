require('dotenv').config();
const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { Userprofile } = require('../models/userprofile.model');
const { Userphoto } = require('../models/userphotos.model');
const { otpGen } = require('otp-gen-agent');
const nodemailer = require('nodemailer');
const { UserApproval } = require('../../admin/models/Userapproval.model');

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
            const id = req.params.id

            if (token) {
                try {

                    const decoded = jwt.verify(token, process.env.user_secret_key);
                    const userId = decoded.userId;


                    const user = await User.findOne({ where: { id: userId } });
                    const userprofile = await Userprofile.findByPk(id, {
                        include: {
                            model: Userphoto,
                            as: 'userImage'
                        }
                    })
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
    getEditPhotospage: async (req, res) => {
        try {
            // Check if the user is authenticated
            const token = req.cookies.userJwt;
            const id = req.params.id

            if (token) {
                try {

                    const decoded = jwt.verify(token, process.env.user_secret_key);
                    const userId = decoded.userId;


                    const user = await User.findOne({ where: { id: userId } });
                    const userprofile = await Userprofile.findByPk(id)
                    if (user) {

                        return res.render('editphoto', { user, userprofile });
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

        try {
            const data = req.body;
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

                // change made User->UserApproval for approving
                const newuser = await UserApproval.create(createUser);
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


            bcrypt.compare(credentials.password, userInDb.password, async function (err, result) {
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
        res.clearCookie('userProfileId');

        res.redirect('/');

    },
    sendRequest: async (req, res) => {
        try {
            const userId = parseInt(req.cookies.userId);
            const profileId = parseInt(req.cookies.profileId);

            console.log(userId, profileId, "Ids");
            // Find the sender and receiver users in the database
            const sender = await User.findOne({ where: { id: userId } });
            const receiver = await User.findOne({ where: { id: profileId } });
            console.log(sender.friendRequestsSent, receiver.friendRequestsReceived, "Profiles found");

            if (!sender || !receiver) {
                throw new Error('Sender or receiver not found');
            }

            if (sender.friendRequestsSent === null) {
                let senderArr = ""
                senderArr += ` ${receiver.id}`
                const createSent = {
                    ...sender,
                    friendRequestsSent: senderArr
                }
                const updatesender = await sender.update(createSent)
                await updatesender.save()
                console.log(createSent.friendRequestsSent, `${sender.firstname} sent`);
            }
            else {
                const createSent = {
                    ...sender,
                    friendRequestsSent: sender.friendRequestsSent += ` ${receiver.id}`
                }
                const updatesender = await sender.update(createSent)
                await updatesender.save()
                console.log(createSent.friendRequestsSent, `${sender.firstname} sent`);
            }
            if (receiver.friendRequestsReceived === null) {
                let receiverArr = ""
                receiverArr += ` ${sender.id}`
                const createReceived = {
                    ...receiver,
                    friendRequestsReceived: receiverArr
                }
                const updatereceiver = await receiver.update(createReceived)
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
                    to: receiver.email, // list of receivers
                    text: `${sender.firstname} ${sender.lastname} has sent you request`,
                };
                await transporter.sendMail(mailOptions, function (err, info) {
                    if (err)
                        console.log(err)
                    else
                        console.log(info);
                });
                await updatereceiver.save()
                console.log(createReceived.friendRequestsReceived, `${receiver.firstname} received`);
            }
            else {
                const createReceived = {
                    ...receiver,
                    friendRequestsReceived: receiver.friendRequestsReceived += ` ${sender.id}`
                }
                const updatereceiver = await receiver.update(createReceived)
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
                    to: receiver.email, // list of receivers
                    text: `${sender.firstname} ${sender.lastname} has sent you Request`,
                };
                await transporter.sendMail(mailOptions, function (err, info) {
                    if (err)
                        console.log(err)
                    else
                        console.log(info);
                });

                await updatereceiver.save()
                console.log(createReceived.friendRequestsReceived, `${receiver.firstname} received`);
            }


            res.send({ "message": "Friend request sent successfully" });
        } catch (error) {
            console.error('Error sending friend request:', error);
            res.status(500).send({ "error": "Internal Server Error" });
        }
    },
    checkFriendRequests: async (req, res) => {
        try {
            const profileId = parseInt(req.cookies.profileId)
            const userId = parseInt(req.cookies.userId)
            const profile = await User.findOne({ where: { id: profileId } })

            console.log(profileId, userId, profile.firstname, "checking ids");

            let sms = "You can send request"
            if (profile.friendLists !== null) {
                console.log(profile.friendLists);
                let checkFriendList = profile.friendLists.replace(/["\\/]/g, '').split(" ").filter((friend) => friend == userId)
                console.log(checkFriendList.length, "checking");
                if (checkFriendList.length) {
                    sms = "User already added"
                }
            }

            if (profile.friendRequestsReceived !== null) {
                let checkReceived = profile.friendRequestsReceived.replace(/["\\/]/g, '').split(" ").filter((friend) => friend == userId)
                console.log(checkReceived, "checkRecevied");
                if (checkReceived.length) {
                    sms = "Request already sent"
                }
            }
            if (profile.friendRequestsSent !== null) {
                console.log(profile.friendRequestsSent, "request sent by profile");
                let checkSent = profile.friendRequestsSent.replace(/["\\/]/g, '').split(" ").filter((friend) => {
                    return friend == userId
                })
                console.log(checkSent, "check sent");
                if (checkSent.length) {
                    sms = "User has sent you Friend Request"
                }

            }

            console.log(sms, "sms sending");
            return res.send({ message: sms })


        } catch (error) {
            console.error('Error getting friend request and send requests:', error);
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
    handleReqAccept: async (req, res) => {
        try {
            const userId = parseInt(req.cookies.userId);
            const profileId = parseInt(req.cookies.profileId);

            // Find the sender and receiver users in the database
            const sender = await User.findOne({ where: { id: profileId } });
            const receiver = await User.findOne({ where: { id: userId } });

            console.log(sender.friendRequestsSent, "checking sender sent list");

            if (sender.friendLists !== null) {
                let editSender = {
                    ...sender,
                    friendRequestsSent: sender.friendRequestsSent.replace(/["\\/]/g, '').split(" ").filter((id) => id != receiver.id).join(" "),
                    friendLists: sender.friendLists += ` ${receiver.id}`
                }

                let updateSender = await sender.update(editSender)

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
                    to: updateSender.email, // list of receivers
                    text: `${receiver.firstname} ${receiver.lastname} has accepted your Request`,
                };

                await transporter.sendMail(mailOptions, function (err, info) {
                    if (err)
                        console.log(err)
                    else
                        console.log(info);
                });

                await updateSender.save()

            } else {
                let friendListsArr = ""
                friendListsArr += ` ${receiver.id}`
                let editSender = {
                    ...sender,
                    friendRequestsSent: sender.friendRequestsSent.replace(/["\\/]/g, '').split(" ").filter((id) => id != receiver.id).join(" "),
                    friendLists: friendListsArr
                }
                console.log(editSender, "updated sender");
                let updateSender = await sender.update(editSender)

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
                    to: updateSender.email, // list of receivers
                    text: `${receiver.firstname} ${receiver.lastname} has accepted your Request`,
                };
                await transporter.sendMail(mailOptions, function (err, info) {
                    if (err)
                        console.log(err)
                    else
                        console.log(info);
                });
                await updateSender.save()
            }

            if (receiver.friendLists !== null) {
                let editReceiver = {
                    ...receiver,
                    friendRequestsReceived: receiver.friendRequestsReceived.replace(/["\\/]/g, '').split(" ").filter(id => id != sender.id).join(" "),
                    friendLists: receiver.friendLists += ` ${sender.id}`
                }
                console.log(editReceiver, "updated receiver");
                let updateReceiver = await receiver.update(editReceiver)
                await updateReceiver.save()
            } else {
                let friendListsArr = ""
                friendListsArr += ` ${sender.id}`
                let editReceiver = {
                    ...receiver,
                    friendRequestsReceived: receiver.friendRequestsReceived.replace(/["\\/]/g, '').split(" ").filter(id => id != sender.id).join(" "),
                    friendLists: friendListsArr
                }
                console.log(editReceiver, "updated receiver");
                let updateReceiver = await receiver.update(editReceiver)
                await updateReceiver.save()
            }

            res.send({ message: "Request accepted Successfully" })
        } catch (error) {
            res.status(504).json({ message: 'Internal Server Error' });
        }
    },
    handleReqReject: async (req, res) => {
        try {
            console.log("From handle reject controller");
            const userId = parseInt(req.cookies.userId);
            const profileId = parseInt(req.cookies.profileId);
            console.log(userId, profileId, "checking ids from cookies");
            // Find the sender and receiver users in the database
            const sender = await User.findOne({ where: { id: profileId } });
            const receiver = await User.findOne({ where: { id: userId } });

            console.log(sender.firstname, receiver.firstname, "Checking all details for rejection");

            let editSenderRej = {
                ...sender,
                friendRequestsSent: sender.friendRequestsSent.replace(/["\\/]/g, '').split(" ").filter(id => id != receiver.id).join(" ")
            }
            console.log(editSenderRej, "Sender");
            let updateSender = await sender.update(editSenderRej)
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
                    to: updateSender.email, // list of receivers
                    text: `${receiver.firstname} ${receiver.lastname} has rejected your Request`,
                };

                await transporter.sendMail(mailOptions, function (err, info) {
                    if (err)
                        console.log(err)
                    else
                        console.log(info);
                });
            await updateSender.save()

            let editReceiverRej = {
                ...receiver,
                friendRequestsReceived: receiver.friendRequestsReceived.replace(/["\\/]/g, '').split(" ").filter(id => id != sender.id).join(" ")
            }
            console.log(editReceiverRej, "Receiver");
            let updateReceiver = await receiver.update(editReceiverRej)
            await updateReceiver.save()

            return res.send({ message: "Request rejected Successfully" })
        } catch (error) {
            res.status(504).json({ message: 'Internal Server Error' });
        }


    }

}

module.exports = userController;