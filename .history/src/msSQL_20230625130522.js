const sql = require('mssql')

const config = {
    server: 'yourMssqlServer',
    database: 'yourDatabaseName',
    name: 'yourSqlUserName',
    password: 'yourSqlPassword'
}

async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(config)
        const result = await sql.query`SELECT TOP 10 * from yourTableName`
        console.dir(result)
        console.log(result.recordset)
        sql.close()
    } catch (err) {
        // ... error checks
        console.log('Error: ', err)
        sql.close()
    }
}
// 设置sql server连接配置
// 连接数据库
sql.connect(config).then(pool => {

    // 履行查询 
    return pool.request()
        .query('SELECT TOP 10 * from yourTableName')
})
    // 处理结果  
    .then(result => {
        console.log(result.recordset)
        sql.close()
    })
    // 毛病处理
    .catch(err => {
        console.log('Error: ', err)
        sql.close()
    })
