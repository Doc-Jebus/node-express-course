const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});

//http methods:
// app.get = get/read data from server
// app.post = place an order (send data)
// app.put = update specific data (params + send data)
// app.delete = delete specific data (path params)
// app.all
// app.use
// app.listen
