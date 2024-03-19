const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const userController = {
    gethome:(req,res)=>{
        return res.render('index');
    },
    getsignupform:(req,res)=>{
        return res.render('signup');
    },
    getloginform:(req,res)=>{
        return res.render('login');
    },
    getprofilepage:(req,res)=>{
         return res.render('profile');
    },
    getdetailprofile:(req,res)=>{
        return res.render('detailprofile');
    },
    getcreateprofile:(req,res)=>{
        return res.render('createprofile');
    },
    signup: async (req, res) => {
        let errorsArr = [];

        if (!req.body.firstname ||!req.body.lastname ||  !req.body.email || !req.body.phone || !req.body.password || !req.body.confirmpassword ||!req.body.dateofbirth) {
    
            req.flash("error", "All fields are required");
            return res.redirect('/signup');
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
            const data = req.body;
           
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
                req.flash("success", "Registration successfull! Please log in.");
                return res.redirect('/login');
            }

        } catch (error) {
           
            res.status(404).send({ "message": "Error", error })
        }

      
       
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                const matchPass = await bcrypt.compare(password, existingUser.password)
                if (matchPass) {
                    // Creating the token for user
                    const token = jwt.sign({ existingUser: existingUser.id }, process.env.user_secret_key);

                    res.cookie('userJwt', token, { httpOnly: true, secure: true });
                   
                  
                    return res.redirect('/');
                }
                else res.send({ "message": "Invalid credentials" })
            }
        } catch (error) {
            req.flash("error", "user login failed");
            return res.redirect('/login');
        }
    }
}

module.exports = userController;