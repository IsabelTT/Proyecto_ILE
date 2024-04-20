const signupCtrl = {};
const ModelUsuarios = require('../models/usuarios_model');

signupCtrl.signup = (req, res, next) => {
    res.render('signup')
}

signupCtrl.crearUsuario = async (req, res) => {
    //verifico que no exista el mismo usuario
    const usuario = await ModelUsuarios.ReadByUser(req.body.user);
    if (usuario.length === 0) {
        await ModelUsuarios.CreateUser(req.body);

        dataAlert = JSON.stringify(
            {
                Title: "Exito!!!",
                Message: "Usuario fué creado con éxito",
                AcceptUrl: "/login"
            })
        alertScript = `<script>openalert(${dataAlert})</script>`
        res.render('signup', {}, (err, html) => { res.send(html + alertScript) });

    }
    else {
        dataAlert = JSON.stringify(
            {
                Title: "Aviso!!!",
                Message: "El usuario ya existe, intente con otro nombre de usuario",
                AcceptUrl: "/signup"
            })
        alertScript = `<script>openalert(${dataAlert})</script>`
        res.render('signup', {}, (err, html) => { res.send(html + alertScript) });
        
    }
}

module.exports = signupCtrl;