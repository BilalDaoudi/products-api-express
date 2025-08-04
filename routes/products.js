const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// chemin vers le fichier JSON
const dataFilePath = path.join(__dirname, "../data/products.json");

// fonction pour lire les produits
function readProducts() {
  const data = fs.readFileSync(dataFilePath, "utf-8");
  return JSON.parse(data);
}

// fonction pour écrire les produits
function writeProducts(products) {
  fs.writeFileSync(dataFilePath, JSON.stringify(products, null, 2), "utf-8");
}

// GET tous les produits
router.get("/", (req, res) => {
  const products = readProducts();
  res.json(products);
});

// GET un produit par ID
router.get("/:id", (req, res) => {
  const products = readProducts();
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Produit non trouvé" });
  res.json(product);
});

// POST ajout via query params
router.post("/add", (req, res) => {
  const { name, price } = req.query;

  if (!name || !price) {
    return res.status(400).json({ message: "Paramètres 'name' et 'price' requis" });
  }

  const products = readProducts();

  const newProduct = {
    id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
    name,
    price: parseFloat(price)
  };

  products.push(newProduct);
  writeProducts(products);

  res.status(201).json({
    message: "Produit ajouté avec succès (via query)",
    product: newProduct
  });
});

// PUT modifier un produit
router.put("/:id", (req, res) => {
  const products = readProducts();
  const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));

  if (productIndex === -1) return res.status(404).json({ message: "Produit non trouvé" });

  const { name, price } = req.body;
  if (name) products[productIndex].name = name;
  if (price) products[productIndex].price = price;

  writeProducts(products);

  res.json(products[productIndex]);
});

// DELETE un produit
router.delete("/:id", (req, res) => {
  let products = readProducts();
  const idToDelete = parseInt(req.params.id);

  const productExists = products.some(p => p.id === idToDelete);
  if (!productExists) return res.status(404).json({ message: "Produit non trouvé" });

  products = products.filter(p => p.id !== idToDelete);
  writeProducts(products);

  res.json({ message: "Produit supprimé avec succès" });
});

module.exports = router;
