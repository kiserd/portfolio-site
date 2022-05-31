
import mysql from 'serverless-mysql'
const db = mysql({
    config: {
        host: process.env.AWS_RDS_HOST,
        port: process.env.AWS_RDS_PORT,
        database: process.env.AWS_RDS_DATABASE,
        user: process.env.AWS_RDS_USER,
        password: process.env.AWS_RDS_PASSWORD,
    }
});

// results = await db.query('SELECT * FROM dummy');
// console.log(results);

export default db;