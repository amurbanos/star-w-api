const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração de middleware para servir arquivos estáticos na pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Configuração de middleware para análise de corpo JSON
app.use(express.json());

// Configuração de middleware para as rotas
const mainRoutes = require('./src/routes/mainRoutes');
app.use('/api', mainRoutes);

// Configuração de middleware para tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

// Inicia o servidor na porta especificada
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
