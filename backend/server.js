//LOAD EXPRESS AND CORS
const express = require("express")
const cors = require("cors")
const pool = require("./db")

//SERVER
const app = express()

//MIDDLEWARE SETUP
app.use(express.json()); //interpret json requests
app.use(cors());

app.post("/register", (req, res) => {
    const email = req.body["email"]
    const password = req.body["password"]

    console.log("Email: " + email);
    console.log("Password: " + password);

    const insertStatement = `INSERT INTO "readaer_db" (email, password) VALUES ("${email}", "${password}");`

    pool.query(insertStatement).then((response) => {
        console.log("Data saved");
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    })

    console.log(req.body);
    res.send("Respond received: " + req.body);
});

app.listen(4000, () => console.log("Server on localhost:4000"));