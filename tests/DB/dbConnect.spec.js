
import {test , expect} from "@playwright/test"

import { getConnection } from "../../utils/db"

test("Connecting Data Base" , async ({}) =>{
    
    const connect = await getConnection()

//     //CREATE TABLE
//     await connect.execute(
//         `CREATE TABLE TRENDS
//         (emp_id int primary key auto_increment,
//         emp_name varchar(40) not null,
//         emp_age int not null);`)

//     //INSERT VALUES
//     await connect.execute(
//     `INSERT INTO TRENDS (Emp_name, Emp_age)
//     VALUES
//     ('Arun', 25), ('Soumiya', 25), ('Ravi', 25), ('Mohana', 25);`)
// 

await connect.execute(
`update trends set Emp_age=27 where Emp_name='Soumiya';`
)
})





