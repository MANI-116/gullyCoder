const express = require("express");
const app = express();
const port = 3000;
app.get("/", (re, res) => {
    res.send("server is created");
})

app.listen(port, () => {
    console.log(`server is listening on port number ${port}`);
})