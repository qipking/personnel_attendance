import * as sql from 'mssql';

const config = {
    server: 'DESKTOP-NT0GDKF\WINCC',
    database: 'work',
    user: 'DESKTOP-NT0GDKF\lichi',
    password: '1313113'
};

async function connectDB() {
    const pool = await sql.connect(config);
    const result = await pool.request().query('SELECT * from Users');

    console.log(result.recordset);
    (sql  as any).close()
}

connectDB().catch(err => {
    console.log('Error: ', err);
    (sql  as any).close()
})