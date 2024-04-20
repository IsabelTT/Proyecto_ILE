var express = require('express');
var router = express.Router();
const LoginController = require('../controllers/LoginController');
const SignupController = require('../controllers/SignupController');
const InicioController = require('../controllers/InicioController');
const NosotrosController = require('../controllers/NosotrosController');
const CitasController = require('../controllers/CitasController');

/*---------- Routes---------------- */
//Rutas libres
router.get('/login', LoginController.login);
router.post('/autentificarUsuario', LoginController.autentificarUsuario);
router.get('/logout', LoginController.logout);

router.get('/signup', SignupController.signup);
router.post('/signup', SignupController.crearUsuario);

//Rutas protegidas
router.get('/citas', CitasController.citas);
router.get('/citas-glaucoma', CitasController.citas_glaucoma);
router.get('/citas-cornea', CitasController.citas_cornea);
router.get('/citas-cataratas', CitasController.citas_cataratas);
router.post('/crearcita', CitasController.crearCita);

router.get('/', InicioController.inicio0);
router.get('/inicio', InicioController.inicio);

router.get('/nosotros', NosotrosController.nosotros);

module.exports = router;
