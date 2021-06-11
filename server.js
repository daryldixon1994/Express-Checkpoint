const express = require("express");
const { get } = require("http");
const app = express();
const path = require("path");
const port = 5000;
const currentMonth = new Date().getMonth();
const day = new Date().getDay();
const t = new Date().getHours();

// app.get("/", (req, res) => {
//     res.status(200);
//     res.send("<h1>HELLO world</h1>");
// });

app.use(express.static(path.join(__dirname, "public")));
app.set("views", "./public/views");
 app.set("view engine", "pug");

app.use((req, res, next) => {
    if (day === 0 || day === 6 || t < 9 || t > 17) {
        res.render("index");
    }
    next();
});
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "views", "index.html"));
});
app.get("/services", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "views", "services.html"));
});
app.get("/contactUs", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "views", "contactUs.html"));
});

// app.get("/date", (req, res) => {
//     res.status(200);
//     res.send(t.toString());
// });

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`visit http://localhost:${port}`);
});
