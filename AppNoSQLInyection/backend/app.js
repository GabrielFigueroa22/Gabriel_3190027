const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static("../frontend"));

const uri = "mongodb+srv://student:dPgF0sb0ADBUZHCI@clusterunam.6pxlppf.mongodb.net/?retryWrites=true&w=majority&appName=ClusterUNAM";

let db;
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error("Error al conectar a MongoDB:", err);
    process.exit(1);
  }
  db = client.db("testdb");
  console.log("Conectado a MongoDB");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.collection("users").findOne({ username: username, password: password }, (err, user) => {
    if (err) return res.status(500).send("Error del servidor");

    if (!user) return res.status(401).send("Usuario o contraseña incorrectos");

    res.send("¡Login exitoso!");
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
