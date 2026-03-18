export default {
  schema: './src/db/schema.js',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: '127.0.0.1',
    port: 5432,
    user: 'admin',
    password: 'password',
    database: 'database',
    ssl: false,
  },
};