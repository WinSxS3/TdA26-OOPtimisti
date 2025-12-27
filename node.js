const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    organization: "Student Cyber Games"
  });
});

app.listen(3000);
