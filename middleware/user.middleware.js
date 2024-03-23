const jwt = require('jsonwebtoken')

const userActions={
    checkLoggedIn:async(req,res,next)=>{
        try {
            const token = req.cookies.userJwt;
        
            if(token){
               res.redirect('/')
            }
            else{
                next();
            }
        } catch (error) {
            console.error('Error executing Sequelize query: ', error);
            res.status(500).send('Internal Server Error');
        }
      
    },
    checkLogged:async(req,res,next)=>{
        try {
            const id = req.params.id;

            const token = req.cookies.userJwt;
        
            if(token){
                res.cookie('profileId', id, { httpOnly: true, secure: true });
                next();
            }
            else{
                res.redirect('/login')
            }
        } catch (error) {
            console.error('Error executing Sequelize query: ', error);
            res.status(500).send('Internal Server Error');
        }
      
    }
 
}

module.exports = {userActions}