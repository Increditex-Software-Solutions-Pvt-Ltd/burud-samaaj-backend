const { validationResult } = require("express-validator")
const { Admin } = require("../models/Admin.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserApproval } = require("../models/Userapproval.model");
const { User } = require("../../user/models/user.model");
const { UserReject } = require("../models/Userreject.model");
const nodemailer = require('nodemailer');
const { assign } = require("nodemailer/lib/shared");
const { About } = require("../models/Aboutcms.model");
const { Member } = require("../models/Membercms.model");
const { Successstory } = require("../models/Successstory.model");
const { Successvideo } = require("../models/Successvideo.model");
const { Userprofile } = require("../../user/models/userprofile.model");

const adminController = {
    getDashboardpage: async (req, res) => {
        try {
            const alluserscount = await User.count();
            const profilescount = await Userprofile.count();
            const bridecount = await Userprofile.count({
                where:{
                    profilefor:'bride'
                }
            });
            const groomcount = await Userprofile.count({
                where:{
                    profilefor:'groom'
                }
            });
        
            return res.render('admin/',{alluserscount,groomcount,bridecount,profilescount})
            
        } catch (error) {
            console.error('Error executing Sequelize query: ', error);
            res.status(500).send('Internal Server Error');
        }
    },
    getCmspage: async (req, res) => {
        try {
            const aboutRecords = await About.findAll();
            const members = await Member.findAll();
            const stories = await Successstory.findAll();
            const videos = await Successvideo.findAll();
            const hasAboutRecords = aboutRecords.length > 0;
            return res.render('admin/cms',{aboutRecords,hasAboutRecords,members,stories,videos})
        } catch (error) {
            console.error('Error executing Sequelize query: ', error);
            res.status(500).send('Internal Server Error');
        }
    },
    getAdminLoginpage: async (req, res) => {
        return res.render('admin/login')
    },
    getAdminRegisterpage: async (req, res) => {
        return res.render('admin/register')
    },
    getuserspage: async (req, res) => {

        try {
            const pendingusers = await UserApproval.findAll();
            const approvedusers = await User.findAll();
            const rejecteduser = await UserReject.findAll();
            return res.render('admin/users', { pendingusers, rejecteduser, approvedusers })

        } catch (error) {
            console.error('Error executing Sequelize query: ', error);
            res.status(500).send('Internal Server Error');
        }
    },
    handleRegisterAdmin: async (req, res) => {
        let errorsArr = [];

        if (!req.body.name || !req.body.email || !req.body.password) {

            req.flash("error", "All fields are required");
            return res.redirect('/admin/register');
        }

        let validationError = validationResult(req);
        if (!validationError.isEmpty()) {
            let error = Object.values(validationError.mapped());

            error.forEach((item) => {
                errorsArr.push(item.msg);
            })
            req.flash("error", errorsArr);

        }
        try {
            const userExist = await Admin.findOne({
                where: {
                    email: req.body.email
                }
            });

            if (userExist) {
                req.flash("error", "User with this email already exists");
                return res.redirect('/admin/register');
            }

            const saltRounds = 10;
            const hashPassword = bcrypt.hashSync(req.body.password, saltRounds);


            let newUser = {
                name: req.body.name,
                email: req.body.email,
                password: hashPassword
            }

            await Admin.create(newUser);
            req.flash("success", "Registration successfull! Please log in.");
            return res.redirect('/admin/login');

        } catch (error) {
            console.log(error);
        }
        return res.redirect('/admin');
    },
    handleAdminlogin: async (req, res) => {
        try {
            const credentials = req.body;


            const adminInDb = await Admin.findOne({ where: { email: credentials.email } });


            if (!adminInDb) {
                req.flash("error", "Admin not found");
                return res.redirect('/admin/login');
            }


            const passwordMatch = await bcrypt.compare(credentials.password, adminInDb.password);

            if (passwordMatch) {
                // Creating the token for admin
                const token = jwt.sign({ adminId: adminInDb.id }, process.env.admin_secret_key);

                res.cookie('adminJwt', token, { httpOnly: true, secure: true });

                return res.redirect('/admin');
            } else {
                req.flash("error", "Admin login failed");
                return res.redirect('/admin/login');
            }
        } catch (error) {
            req.flash("error", "Admin login failed");
            return res.redirect('/admin/login');
        }
    },
    postLogoutAdmin: (req, res) => {
        res.clearCookie('adminJwt');
        res.redirect('/admin/login');
    },
    getSingleUser: async (req, res) => {
        try {
            const user = await UserApproval.findOne({
                where: {
                    id: req.params.id
                }
            });

            console.log(user);
            return res.json(user);
        } catch (error) {
            console.error('Error fetching product:', error);
            res.status(500).json({ error: 'Failed to fetch product' });
        }
    },
    approveUser: async (req, res) => {
        try {
            const userId = req.body.userId;

            // Find the user by ID
            const user = await UserApproval.findOne({ where: { id: userId } });


            const newuser = {
                firstname: user.firstname,
                middlename: user.middlename,
                lastname: user.lastname,
                email: user.email,
                phone: user.phone,
                gender: user.gender,
                address: user.address,
                state: user.state,
                district: user.district,
                taluka: user.taluka,
                town: user.town,
                postalcode: user.postalcode,
                country: user.country,
                country: user.country,
                password: user.password,
                dateofbirth: user.dateofbirth,
            }

            console.log(newuser, "newuser is created");

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            else {
                if (user.email) {

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
                        to: user.email, // list of receivers
                        text: `
                    Congratulations !!
                    Your Registration Application for Burud Bandhan is approved by Admin.
                    Now you can check other profiles and find your perfect match.
                    `,
                    };

                    await transporter.sendMail(mailOptions, async function (err, info) {
                        if (err)
                            console.log(err)
                        else
                            console.log(info);
                        await User.create(newuser);
                        await user.destroy();

                        await user.save();

                        // Respond with success message
                        return res.redirect('/admin/users')
                    });

                }

            }

        } catch (error) {
            console.error('Error approving user:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    },
    rejectUser: async (req, res) => {
        try {
            const userId = req.body.userId;
            const reason = req.body.reason;
            // Find the user by ID
            const user = await UserApproval.findOne({ where: { id: userId } });

            const newuser = {
                firstname: user.firstname,
                middlename: user.middlename,
                lastname: user.lastname,
                email: user.email,
                phone: user.phone,
                gender: user.gender,
                address: user.address,
                state: user.state,
                district: user.district,
                taluka: user.taluka,
                town: user.town,
                postalcode: user.postalcode,
                country: user.country,
                country: user.country,
                reason: reason,
                dateofbirth: user.dateofbirth,
            }

            console.log(newuser, "newuser is created");

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            else {
                if (user.email) {

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
                        to: user.email, // list of receivers
                        text: `
                    Your Registration Application for Burud Bandhan is rejected by Admin.
                    `,
                    };

                    await transporter.sendMail(mailOptions, async function (err, info) {
                        if (err)
                            console.log(err)
                        else
                            console.log(info);
                        await UserReject.create(newuser);
                        await user.destroy();

                        await user.save();
                        // Respond with success message
                        return res.redirect('/admin/users')
                    });

                }


            }

        } catch (error) {
            console.error('Error approving user:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}


module.exports = adminController;