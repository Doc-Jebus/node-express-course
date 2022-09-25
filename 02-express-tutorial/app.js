const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});

//http methods:
// app.get = get/read data from server
// app.post = place an order (send data)
// app.put = update specific data (params + send data)
// app.delete = delete specific data (path params)
// app.all
// app.use
// app.listen
