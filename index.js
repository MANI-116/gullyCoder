const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (re, res) => {
    res.send("server is created");
})
//login
app.post("/login", (req, res) => {
    console.log("login request came");
    res.send("credentials received!");
    console.log(req.body);

})

//signup
app.post("/signup", (req, res) => {
    console.log("signup request came");
    console.log(req.body);
    res.send("signup request accepted");
})

//create problem
app.post("/createproblem", (req, res) => {
    console.log("createProblem request came");
    console.log(req.body);
    res.send("creating new problem");
})

app.post("/submitproblem", (req, res) => {
    console.log(req.body);
    res.send("evaluating submission");
})

app.listen(port, () => {
    console.log(`server is listening on port number ${port}`);
})