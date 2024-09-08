import mysql2 from "mysql2/promise"
import dotenv from "dotenv";
dotenv.config()

async function initConnection(){

    try {
        const connection = await mysql2.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_SCHEMA,
            port: Number(process.env.MYSQL_PORT) || 3306,
          });

        //   const result = await connection.query("SELECT count(*) FROM customers where job_title = 'trainer' group by country_region")
        //   console.log(result[0])

        //   const result2 = await connection.execute("SELECT count(*) FROM customers where job_title = ? group by ?",["trainer","country_region"])
        //   console.log(result2[0])

          const result3 = await connection.execute("SELECT * FROM customers where job_title = ?",["Purchasing Manager"])
        //   console.log((result3[0] as Array<any>)[0])

          const customers  = (result3[0] as Array<any>).map((c)=>{
            return {jobTitle: c.job_title, fullName: c.first_name + " " + c.last_name }
          })

          console.log(customers)


    } catch (error) {
        console.log(error)
    }




}


initConnection()