const Product = require("./models/product");
const express = require("express");
const PORT = process.env.PORT || 3000;
const db = require("./db/index");

const app = express();

db.on("error", console.error.bind(console, "MongoDB connection error"));


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});


app.get('/', (req, res) => {
  res.send('This is the root');
})

app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products)
})

app.get( "/products/:id", async (req, res) => {
  //checking to see if something exist
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) throw Error("Product not found")
    res.json(product)
  } catch (e) {
    console.log(e);
    res.send("Product not found")
  }
})