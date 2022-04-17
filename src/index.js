const express = require("express");
const connect = require("./configs/db");
const cors = require('cors')
const { getUsers, register, login } = require("./controllers/auth.controller");
const port = process.env.PORT || 5000
const flatsController = require("./controllers/flat.controller")
const residantsController = require("./controllers/residants.controller")


const app = express();
app.use(cors())

app.use(express.json());
app.use("/residants", residantsController)
app.use("/flats", flatsController)


//register

app.post("/register", register);
app.get ("/userdata", getUsers)
app.post("/login", login);



app.listen(port, async (req, res) => {
    try {
        await connect();
        console.log(`Server Running On Port 5000`)
    } catch (er) {
        console.log(er.message)
    }
})