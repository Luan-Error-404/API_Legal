import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: "libertadores_luan",
    password: "Lu@N-404",
    database: "libertadores_luan"
})

export default pool;