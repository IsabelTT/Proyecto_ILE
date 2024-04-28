//import { config } from 'dotenv'
//config()

const Pool = require('pg').Pool
const pool = new Pool({

  username: process.env.DB_USER,
  hostname: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  //Internal URL de render
  connectionString: process.env.DATABASE_URL,
  ssl: true,



});

//Variable global :
global.db = pool;


// #   user: 'postgres',
// #   host: 'localhost',
// #   database: 'Clinica_oftalmologica',
// #    port: 5432,
// #    user: 'itt',