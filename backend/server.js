//LOAD EXPRESS AND CORS
const express = require("express")
const cors = require("cors")
const pool = require("./config/db")
const router = require("./routes/userRoutes")

//SERVER
const app = express()

//MIDDLEWARE SETUP
app.use(express.json()); //interpret json requests
app.use(cors());

app.use("/", router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Server on localhost: 4000"));