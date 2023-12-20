const port = 8080;
const express = require("express");
const app = express();
const ProductManager = require("./product-manager.js");
const manager = new ProductManager("./products.json");

app.listen(PUERTO, () => {
    console.log('Escuchando en http://localhost:${PUERTO}');
  });

app.get("/", (req, res) => {
    res.send('Pagina de Inicio');
  });

app.get('/product', async (req, res) => {
    let limit = parseInt(req.query.limit);
    
    
    const productos = await misProductos.slice(0, limit);
    res.send(productos);
    
  });

app.get("/products/:pid", async (req, res) => {
    try {
      let pid = parseInt(req.params.pid);
      console.log(pid)
      const buscar = await manager.ProductManager(pid);
      
      if (buscar) {
        return res.send(buscar);
      } else {
        return res.send("ID de producto incorrecto");
      }
    } catch (error) {
      console.log(error);
      res.send("error al cargar");
    }
  });