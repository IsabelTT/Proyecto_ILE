const nosotrosCtrl = {};
const jwt = require("jsonwebtoken");


nosotrosCtrl.nosotros = (req, res, next) => {
    const token = req.cookies.token;
    const id_user = req.cookies.id_user;
    const user = req.cookies.user;

    if (!token) { //|| typeof id_user === "undefined" || typeof user === "undefined"
        return res.redirect('/login')
    }
    else {
        jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.redirect('/login');
            }
            else {
                res.render('nosotros');
            }
        });
    }
}

module.exports = nosotrosCtrl;