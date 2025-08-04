# Products API Express

Une API REST simple développée avec **Node.js** et **Express.js** pour gérer une liste de produits.  
Les données sont stockées de manière persistante dans un fichier JSON, sans base de données.

---

## 📌 Fonctionnalités principales

- ✅ Récupérer tous les produits
- ✅ Récupérer un produit par son ID
- ✅ Ajouter un produit via les paramètres de requête (`name` et `price`)
- ✅ Modifier un produit existant
- ✅ Supprimer un produit

---

## ⚙️ Prérequis

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- npm (fourni avec Node.js)


## 🚀 Installation

### 1. Cloner le dépôt

```bash
git clone https://github.com/tonPseudo/nom-du-depot.git
cd nom-du-depot
```

### 2. Installer les dépendances

```bash
npm install

```
### 3. Utilisation / Démarrer le serveur :
```bash
node server.js
```

### 4. Méthode	URL	Description :

GET	/api/products	Retourne la liste de tous les produits
GET	/api/products/:id	Retourne un produit par ID
POST	/api/products/add?name=xxx&price=yyy	Ajoute un produit via query params
PUT	/api/products/:id	Modifie un produit (via body JSON)
DELETE	/api/products/:id	Supprime un produit
