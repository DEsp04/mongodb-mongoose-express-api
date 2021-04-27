//will import database and schema

const db = require("../db");
const Brand = require("../models/brand");
const Product = require("../models/product")


db.on('error', console.error.bind(console, "MongoDB Connection error:"))

const main = async () => {
  const brand1 = await new Brand({ name: 'Apple', url: 'https://www.apple.com' });
  //calling it and saving it into the database
  brand1.save();

  const brand2 = await new Brand({ name: "Vespa", url: "https://www.vespa.com" });
  brand2.save();






  const products = [
    {title: ""}
  ]
}