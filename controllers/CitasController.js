const citasCtrl = {};

const jwt = require("jsonwebtoken");

const ModelMedicos = require('../models/medicos_model');
const ModelCitas = require('../models/citas_model');

citasCtrl.citas = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.redirect('/login')
    }
    else {
        jwt.verify(token, process.env.TOKEN_SECRET_KEY, async (err, decoded) => {
            if (err) {
                return res.redirect('/login');
            }
            else {
                res.render('citas', {})
            }
        });
    }
}

citasCtrl.citas_glaucoma = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.redirect('/login')
    }
    else {
        jwt.verify(token, process.env.TOKEN_SECRET_KEY, async (err, decoded) => {
            if (err) {
                return res.redirect('/login');
            }
            else {
                const ListaMedicos = await ModelMedicos.ReadBySpeciality('Glaucoma');
                res.render('citas-especialidad', {id_user:req.cookies.id_user, especialidad: "glaucoma", ListaMedicos: ListaMedicos })
            }
        });
    }
}

citasCtrl.citas_cornea = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.redirect('/login')
    }
    else {
        jwt.verify(token, process.env.TOKEN_SECRET_KEY, async (err, decoded) => {
            if (err) {
                return res.redirect('/login');
            }
            else {
                const ListaMedicos = await ModelMedicos.ReadBySpeciality('Cornea');
                res.render('citas-especialidad', {id_user:req.cookies.id_user, especialidad: "cornea", ListaMedicos: ListaMedicos })
            }
        });
    }
}

citasCtrl.citas_cataratas = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.redirect('/login')
    }
    else {
        jwt.verify(token, process.env.TOKEN_SECRET_KEY, async (err, decoded) => {
            if (err) {
                return res.redirect('/login');
            }
            else {
                const ListaMedicos = await ModelMedicos.ReadBySpeciality('Cataratas');
                res.render('citas-especialidad', {id_user:req.cookies.id_user ,especialidad: "cataratas", ListaMedicos: ListaMedicos })
            }
        });
    }
}

citasCtrl.crearCita = async (req, res) => {
    //verifico que el medico este disponible
    const cita = await ModelCitas.ReadByIddoctorDateHour(req.body);
    if (cita.length != 0) {//medico no disponible
        dataAlert = JSON.stringify(
            {
                Title: "Aviso!!!",
                Message: "Medico no disponible. Vuelva a intentar con otra Hora o Fecha",
                AcceptUrl: "/citas"
            })
        alertScript = `<script>openalert(${dataAlert})</script>`
        return res.render('citas-especialidad', {}, (err, html) => { res.send(html + alertScript) });
    }

    //verifico que la fecha dela cita no sea anterior a hoy ni hoy
    var fecha_hoy = new Date();
    var fecha_cita = new Date(req.body.date);
    var fecha_hoy_formated = new Date(fecha_hoy.getFullYear(), fecha_hoy.getMonth(), fecha_hoy.getDate());
    var fecha_cita_formated = new Date(fecha_cita.getFullYear(), fecha_cita.getMonth(), fecha_cita.getDate());
    if (fecha_hoy_formated >= fecha_cita_formated) {
        dataAlert = JSON.stringify(
            {
                Title: "Aviso!!!",
                Message: "La fecha de la cita no puede ser anterior a hoy y tampoco la cita se puede reservar el mismo dia.",
                AcceptUrl: "/citas"
            })
        alertScript = `<script>openalert(${dataAlert})</script>`
        return res.render('citas-especialidad', {}, (err, html) => { res.send(html + alertScript) });
    }

    //Si todo Ok-> creo la cita
    await ModelCitas.CreateAppointment(req.body);
    dataAlert = JSON.stringify(
        {
            Title: "Exito!!!",
            Message: "Cita creada con éxito",
            AcceptUrl: "/citas"
        })
    alertScript = `<script>openalert(${dataAlert})</script>`
    return res.render('citas-especialidad', {}, (err, html) => { res.send(html + alertScript) });
}

module.exports = citasCtrl;