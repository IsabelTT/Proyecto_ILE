const Pool = require('pg').Pool

const pool = new Pool({

  user: 'postgres',
  host: 'localhost',
  database: 'Clinica_oftalmologica',
  password: 'Basededatos20',
  port: 5432,

  // host: process.env.DB_HOST,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASS,
  // port: process.env.DB_PORT,
  // database: process.env.DB_NAME


});

//Variable global :
global.db = pool;