const express = require("express");
const app = express();
const user = require("./MOCK_DATA.json")

app.get('/api/user', (req, res) => {
    return res.json(user);
})

app.get('/user', (req, res) => {
    const html = `
    <ul>
    ${user.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html);
})

app.route("/api/user/:id").get((req, res) => {
    const id = Number(req.params.id);
    const users = user.find((user) => user.id = id);
    return res.json(users);
}).patch((req, res) => {
    // Edit user with id
    return res.json({ status: "pending" })
}).delete((req, res) => {
    // Edit user with id
    return res.json({ status: "pending" })
})




const port = 8000;

app.listen(port, () => console.log("server started"));