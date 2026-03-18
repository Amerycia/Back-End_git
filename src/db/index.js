const { drizzle } = require('drizzle-orm/node-postgres');
const { Pool } = require('pg');
const schema = require('./schema');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'admin',
  password: 'password',
  database: 'database',
});

const db = drizzle(pool, { schema });

module.exports = db;