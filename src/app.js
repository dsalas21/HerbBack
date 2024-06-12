import express from'express'
import { pool } from './db.js';
import { PORT } from './config.js';
const app = express();

app.get('/', (req, res) => {
    res.send('Backend is running');
  });

  app.listen(PORT, "0.0.0.0", function () {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
  

app.get('/test-db-connection', async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT 1");
      res.status(200).json({ status: 200, message: 'Connection successful', data: rows });
    } catch (err) {
      res.status(500).json({ status: 500, message: 'Connection failed', error: err.message });
    }
  });
  
  app.get('/Usuarios', async function(req, res, next) {
    try {
      const [rows] = await pool.query("SELECT * FROM Usuarios");
      if (rows.length === 0) {
        return res.status(204).json({ status: 204, message: "No items found" });
      }
      return res.status(200).json({ status: 200, data: rows });
    } catch (err) {
      return res.status(500).json({ status: 500, message: err.message });
    }
  });