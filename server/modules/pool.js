const pg = require('pg');
let pool;

// This is for permanent deployment
if (process.env.DATABASE_URL) {
    pool = new pg.Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
}

// This is for local development
else {
    pool = new pg.Pool({
        host: 'localhost',
        port: 5432,
        database: 'your-database-name-here'
    });
}

module.exports = pool;