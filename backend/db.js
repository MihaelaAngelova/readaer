const {Pool} = require("pg")

const pool = new Pool({
    user: "postgres",
    password:"adoramore",
    host: "localhost",
    port: 5432,
    database: "readaer_db"
})

module.exports = pool;