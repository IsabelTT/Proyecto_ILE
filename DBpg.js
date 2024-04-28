//import { config } from 'dotenv'
//config()

const Pool = require('pg').Pool
const pool = new Pool({

  DB_USER: process.env.DB_USER,
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  DB_PASS: process.env.DB_PASS,
  DB_PORT: process.env.DB_PORT,
  //External URL de render
  DATABASE_URL: process.env.DATABASE_URL,
  //ssl: true,



});

//Variable global :
global.db = pool;


// #   user: 'postgres',
// #   host: 'localhost',
// #   database: 'Clinica_oftalmologica',
// #    port: 5432,
// #    user: 'itt',