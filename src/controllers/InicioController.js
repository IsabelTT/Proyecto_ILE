const inicioCtrl = {};
const jwt = require("jsonwebtoken");

inicioCtrl.inicio0 = (req, res, next) => {
    return res.redirect('/inicio')
}

inicioCtrl.inicio = (req, res, next) => {
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
                res.render('inicio');
            }
        });
    }
}


module.exports = inicioCtrl;

// const id_user = req.query.id_user;
// const user = req.query.user;