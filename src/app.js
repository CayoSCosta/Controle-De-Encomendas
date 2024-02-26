require('dotenv').config();

const express = require('express');
const connectDB = require('./config/dbConnection');

const app = express();

// Conecta ao banco de dados
connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API rodando'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
