const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    organization: "Student Cyber Games"
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
