const { User } = require("../models/user.model");

const userController = {
    register:async(req,res)=>{
        try {
            const data = req.body;
           const newuser = await User.create(data);
           res.status(200).send({"message":"new user created",newuser})
        } catch (error) {
            res.status(404).send({"message":"Error",error})
        }
         
    },
    login:async(req,res)=>{

    }
}

module.exports = userController;