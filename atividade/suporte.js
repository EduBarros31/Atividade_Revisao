const express = require('express');

const dotenv = require("dotenv")

const clienteRoutes = require("./src/modules/cliente/routes/index")

const funcionarioRoutes = require("./src/modules/funcionario/routes/index")


dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use(clienteRoutes);
app.use(funcionarioRoutes);











app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});