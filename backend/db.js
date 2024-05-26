const {Pool} = require("pg")

const pool = new Pool({
    user: "postgres",
    password:"adoramore",
    host: "localhost",
    port: 5432,
    database: "readaer_db"
})

const createTableQuery = `CREATE TABLE "user" (
    user_id serial PRIMARY KEY,
    email VARCHAR (50) UNIQUE NOT NULL,
    password VARCHAR (50) UNIQUE NOT NULL,
    first_name VARCHAR (50) NOT NULL,
    last_name VARCHAR (50) NOT NULL,
    country VARCHAR (50) UNIQUE NOT NULL,
    gender VARCHAR (1) NOT NULL,
    date_of_birth DATE
);`

pool.query(createTableQuery)
.then((response) => {
    console.log("Table created");
    console.log(response);
})
.catch((err) => {
    if(err.code === '42P04') { // 42P04 is the error code for 'database already exists'
        console.log("Database already exists.");
    } else {
        console.error("Error creating database: ", err);
    }
})
.finally(() => {
    pool.end(); // close the pool connection
});

module.exports = pool;