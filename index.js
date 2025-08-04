const express = require("express");
const app = express();
const productsRoutes = require("./routes/products");

app.use(express.json()); // Pour parser le JSON
app.use("/api/products", productsRoutes); // Préfixe pour les routes produit

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
