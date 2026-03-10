const { Pool } = require('pg');

const pool = new Pool({
    user: 'YOUR_USERNAME',
    host: 'YOUR_HOSTNAME',
    database: 'YOUR_DATABASE',
    password: 'YOUR_PASSWORD',
    port: 5432,
});
console.log('typeof password:', typeof pool.options.password);
module.exports = {
    query: (text, params) => pool.query(text, params),
};