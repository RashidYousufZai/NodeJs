const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return (
        res.send("Hellow from home page")
    )
});

app.get("/about", (req, res) => {
    return (
        res.send("Hellow from About page")
    )
});

app.get("/services", (req, res) => {
    return (
        res.send("Hellow from service page")
    )
});

app.listen(8000);