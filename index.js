const express = require("express");
const app = express();

app.use(express.static('/'))

app.get("/",(request,response) => {
  return response.sendFile(__dirname + "/index.html");
});

app.listen(8000,() => {
  console.log("LOCALHOST IS RUNNING");
});
