const sql = require('mssql')

const config = {
    server: 'yourMssqlServer',
    database: 'yourDatabaseName',
    user: 'yourSqlUserName',
    password: 'yourSqlPassword'
}

async function connectDB() {
    const pool = await sql.connect(config)
    const result = await pool.request().query('SELECT TOP 10 * from yourTableName')

    console.log(result.recordset)
    sql.close()
}

connectDB().catch(err => {
    console.log('Error: ', err)
    sql.close()
})