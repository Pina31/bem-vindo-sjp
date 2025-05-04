const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Rotas iniciais
app.get('/', (req, res) => {
  res.send('Bem-vindo ao backend do aplicativo de acolhimento!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});