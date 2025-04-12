require('dotenv').config()
const { Pool } = require('pg')



const pool = new Pool({
   connectionString: process.env.DATABASE_URL
})

pool.connect()
  .then(() => {
    console.log('Connected to the database successfully!');
  })
  .catch((err) => {
    console.error('Error connecting to the database', err.stack);
  });
module.exports = pool;