const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (re, res) => {
    res.send("server is created");
})

app.post("/login", (req, res) => {
    console.log("login request came");
    res.send("credentials received!");
    console.log(req.body);

})
app.listen(port, () => {
    console.log(`server is listening on port number ${port}`);
})