const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
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
