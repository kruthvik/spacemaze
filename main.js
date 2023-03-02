const express = require("express")
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/win", (req, res) => {
  res.sendFile(path.join(__dirname, "/win.html"));
});

app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "/test.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
