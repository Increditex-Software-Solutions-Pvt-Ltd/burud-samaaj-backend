const jwt = require('jsonwebtoken')

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

            const token = req.cookies.userJwt;

            if (token) {
                res.cookie('profileId', id, { httpOnly: true, secure: true });
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
            const userEntered = req.body
            console.log(otp, userEntered);
            if (otp === userEntered) {
                return res.redirect('/');
            }
            else {
                return res.redirect('/login')
            }
        } catch (error) {
            console.error('Error executing Sequelize query: ', error);
            return res.status(500).send('Internal Server Error');
        }

    }

}

module.exports = { userActions }