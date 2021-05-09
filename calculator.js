const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
   res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
   res.send("Congrations!!! you have just posted it Great Day");
});

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`);
});