const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const pool = require('../startup/db');

// importa e conecta com o banco de dados
require('./startup/db');

// importa o arquivo .env
require('dotenv').config();

// importa suas rotas
const sensorRoutes = require('./routes/sensores');

app.use(express.json());

// rotas
app.use('/sensores', sensorRoutes);

// rota raiz só pra teste
app.get('/', (req, res) => {
  res.send('Servidor funcionando 🚀');
});

// inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
