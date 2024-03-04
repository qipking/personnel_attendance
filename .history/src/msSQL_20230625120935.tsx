import * as sql from 'mssql'

const config = {
    server: 'localhost',
    database: 'work',
    user: 'lichi',
    password: '1313113'
};

async function connectDB() {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(config);
        let value ='SELECT * from User';
        const result = await sql.query(value);
        console.dir(result);
    } catch (err) {
        console.log('Error: ', err);
        (sql as any).close();
    }
}

