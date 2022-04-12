import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("NodeJS - JavaScript - Back-End"));
app.get("/produtos", (req, res) => res.send("Listando produtos"));
app.listen(port, () => console.log(`Running at port: ${port}!`));
