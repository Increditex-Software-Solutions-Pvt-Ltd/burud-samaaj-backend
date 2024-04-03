const { validationResult } = require("express-validator")
const { Admin } = require("../models/Admin.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserApproval } = require("../models/Userapproval.model");

const adminController = {
     getDashboardpage:async(req,res)=>{
         return res.render('admin/')
     },
     getCmspage:async(req,res)=>{
         return res.render('admin/cms')
     },
     getAdminLoginpage:async(req,res)=>{
         return res.render('admin/login')
     },
     getAdminRegisterpage:async(req,res)=>{
         return res.render('admin/register')
     },
     getuserspage:async(req,res)=>{

        try {
            const pendingusers = await UserApproval.findAll();
            return res.render('admin/users',{pendingusers})

        } catch (error) {
            console.error('Error executing Sequelize query: ', error);
            res.status(500).send('Internal Server Error');
        }
     },
     handleRegisterAdmin:async(req,res)=>{
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
     handleAdminlogin:async(req,res)=>{
        try {
            const credentials = req.body;
    
           
            const adminInDb = await Admin.findOne({ where: { email: credentials.email }});
            
          
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
     postLogoutAdmin:(req,res)=>{
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
    approveUser:async(req,res)=>{
        try {
           console.log("this is approval controller");
            // const userObj = await UserApproval.findByPk(id)
            // console.log(userObj,"this is userobj");
            return res.json({"message":"approval successful"});
        } catch (error) {
        
            console.error('Error fetching product:', error);
            res.status(500).json({ error: 'Failed to fetch product' });
        }
    }
}


module.exports = adminController;