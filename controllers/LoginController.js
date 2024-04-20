const loginCtrl = {};
const ModelUsuarios = require('../models/usuarios_model');
const jwt = require("jsonwebtoken");

loginCtrl.logout = (req, res, next) => {
    res.clearCookie("token", { path: '/' });
    res.clearCookie("id_user", { path: '/' })
    res.clearCookie("user", { path: '/' })
    res.redirect('/')
}

loginCtrl.login = (req, res, next) => {
    res.render('login') // Renderiza la plantilla Login
}

loginCtrl.autentificarUsuario = async (req, res) => {
    const usuario = await ModelUsuarios.ReadByUserPsw(req.body);
    if (usuario.length == 0) {
        console.log("no existe usuairo o no se escribiron correctamente las credenciales");

        dataAlert = JSON.stringify(
            {
                Title: "Aviso!!!",
                Message: "No existe usuairo o no se escribiron correctamente las credenciales",
                AcceptUrl: "/"
            })
        alertScript = `<script>openalert(${dataAlert})</script>`

        res.render('login', {}, (err, html) => { res.send(html + alertScript) });
    }
    else {
        console.log("Usuario logueado");
        const token = jwt.sign({ userId: usuario._id }, process.env.TOKEN_SECRET_KEY, {
            expiresIn: "1h",
        });
        res.cookie("token", token);
        res.cookie("id_user", usuario[0]._id)
        res.cookie("user", usuario[0].usuario)
        res.redirect("/inicio")
    }
}

module.exports = loginCtrl;