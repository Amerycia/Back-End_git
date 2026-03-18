const { drizzle } = require('drizzle-orm/node-postgres');
const { Client } = require('pg');
const schema = require('./schema');

const client = new Client({
  host: '127.0.0.1',
  port: 5432,
  user: 'admin',
  password: 'password',
  database: 'database',
});

client.connect();

module.exports = drizzle(client, { schema });