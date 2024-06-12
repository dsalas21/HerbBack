import express from'express'
import { pool } from './db.js';
const app = express();

app.get('/', (req, res) => {
    res.send('Backend is running');
  });

app.listen(3001)
console.log('server run in port : 3001')
