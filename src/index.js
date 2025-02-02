const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json()); // Pega o body das requisições post e put
app.use(routes);

app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
