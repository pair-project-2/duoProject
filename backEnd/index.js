const express = require("express");
const cors = require("cors");
const port = 4000;
const app = express();

const {getAllProducts,getOneProduct,
  updateOneProduct,
  createOneProduct,
  deleteOneProduct } = require("./mongoDb/main");

app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
  getAllProducts()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  getOneProduct(productId)
    .then((product) => {
      if (!product) {
        res.status(404).json({ message: "Product not found" });
      } else {
        res.status(200).json(product);
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.post("/api/products", (req, res) => {
  const newProductData = req.body;
  createOneProduct(newProductData)
    .then((newProduct) => {
      res.status(201).json(newProduct);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.put("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const updatedProductData = req.body;
  updateOneProduct(productId, updatedProductData)
    .then((updatedProduct) => {
      if (!updatedProduct) {
        res.status(404).json({ message: "Product not found" });
      } else {
        res.status(200).json(updatedProduct);
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.delete("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  deleteOneProduct(productId)
    .then((deletedProduct) => {
      if (!deletedProduct) {
        res.status(404).json({ message: "Product not found" });
      } else {
        res.status(200).json({ message: "Product deleted successfully" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

