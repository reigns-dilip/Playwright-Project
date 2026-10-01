
import mysql from 'mysql2/promise'

export async function getConnection (){

    return await mysql.createConnection({

        host : 'localhost',
        user : 'root',
        password : 'Dilipkumar@123',
        database : 'stdbb',
        port : '3306'

    })
}









