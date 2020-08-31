const {Pool} = require('pg');
db = new Pool({
    host: 'ec2-54-161-150-170.compute-1.amazonaws.com',
    user: 'vfvzidvaiitlqs',
    password: '798049234834ef053b8516b2f3fd293b2b67febe343047473dff643702e8b4f7',
    database: 'd9pir86am00snm',
    port: 5432,
    ssl: { rejectUnauthorized: false }
});

module.exports = db;