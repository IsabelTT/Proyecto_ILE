//import pg from 'pg'
const Pool = require('pg').Pool

const pool = new Pool({

  // user: 'itt',
  // host: 'dpg-coij7sf79t8c738hu5c0-a',
  // database: 'clinicaoftalmologica_itt',
  // password: 'RBL6Ndnn7sfWmoaX9omVIllhhKBDmwPP',
  // port: 5432
  // connectionString: 'postgres://itt:RBL6Ndnn7sfWmoaX9omVIllhhKBDmwPP@dpg-coij7sf79t8c738hu5c0-a.oregon-postgres.render.com/clinicaoftalmologica_itt'

  user: 'postgres',
  host: 'localhost',
  database: 'Clinica_oftalmologica',
  password: 'Basededatos20',
  port: 5432,
  // connectionString: 'postgres://itt:RBL6Ndnn7sfWmoaX9omVIllhhKBDmwPP@dpg-coij7sf79t8c738hu5c0-a.oregon-postgres.render.com/clinicaoftalmologica_itt'



  // host: process.env.DB_HOST,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASS,
  // port: process.env.PORT,
  // database: process.env.DB_NAME,
  //connectionString: process.env.DATABASE_URL,


});

//Variable global :
global.db = pool;