require('dotenv').config();
const { Pool } = require('pg');
const fs = require('fs');


const pool = new Pool({ // uses environment variables
  max: 1,
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync('./us-west-1-bundle.pem').toString()
  }
});

module.exports = pool;