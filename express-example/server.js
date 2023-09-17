const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const bookRouter = require("./routes/bookRouter");

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.path, req.ip);
  next();
});

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("reached application");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.end();
});

app.get("/file", (req, res) => {
  res.sendFile(path.resolve("./public/file.html"));
});

app.use(express.static(path.join(__dirname, "public")));

app.use(bookRouter);

app.get("/file1", (req, res) => {
  res.sendFile(path.resolve("./public/file1.html"));
});
// add error handler

app.listen(5000, () => {
  console.log("listening at 5000");
});
