const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log(req);
});
app.listen(8080, () => {
  console.log("서버");
});
