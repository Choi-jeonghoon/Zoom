import express from "express";

const app = express();
app.set("view engine", "pug");
app.set("views", __dirname + "/src/views");

const handleListen = () => console.log(`Listening on http://localhost:3000`);

console.log("hello");

app.listen(3001, handleListen);
