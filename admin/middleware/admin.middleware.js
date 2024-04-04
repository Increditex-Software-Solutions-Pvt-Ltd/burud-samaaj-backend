const jwt = require('jsonwebtoken');

const isAdminLoggedIn=async(req,res,next)=>{
    const adminToken = req.cookies.adminJwt;

    if(adminToken){
        try {
            const decoded = jwt.verify(adminToken, process.env.admin_secret_key);
            const adminId = decoded.adminId;

            next();
        } catch (error) {
            res.redirect('/admin/login');
        }
    }
    else{
        res.redirect('/admin/login');
    }
}

module.exports = isAdminLoggedIn