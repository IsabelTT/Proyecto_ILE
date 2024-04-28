import { config } from 'dotenv'
config()

const Pool = require('pg').Pool
const pool = new Pool({
  //External URL de render
  user: 'itt',
  host: 'dpg-coij7sf79t8c738hu5c0-a.oregon-postgres.render.com',
  database: 'clinicaoftalmologica_itt',
  password: 'RBL6Ndnn7sfWmoaX9omVIllhhKBDmwPP',
  port: 5432,
  ssl: true,
  connectionString: process.env.DATABASE_URL

  // En Local: 
  // user: 'postgres',
  // host: 'localhost',
  // database: 'Clinica_oftalmologica',
  // password: 'Basededatos20',
  // port: 5432,


});

//Variable global :
global.db = pool;