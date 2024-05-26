//LOAD EXPRESS AND CORS
const express = require("express")
const cors = require("cors")
const pool = require("./db")

//SERVER
const app = express()

//MIDDLEWARE SETUP
app.use(express.json()); //interpret json requests
app.use(cors());

app.post("/adduser", (req, res) => {
    console.log(req.body);
    res.send("Respond received: " + req.body);
});

app.listen(4000, () => console.log("Server on localhost:4000"));