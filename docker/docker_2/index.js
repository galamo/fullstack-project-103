const express = require("express")


const app = express();

app.get("/data", (req, res, next) => {
    return res.send("DATA FROM API")
})

app.listen(3000)