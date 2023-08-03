
const express = require('express');
//const cors = require('cors');

const app = express(); // Inicializa o servidor
const port = 8000; //Define a porta do servidor

app.use(express.urlencoded({extended: true}))
//app.use(cors());
app.use(express.json());
 
const rotas = require("./servicos"); // Rotas da mensagem
app.use(rotas); // Carrega os serviços

// Inicia o servidor

app.listen(port, () =>{
    console.log(`Servidor ouvindo porta ${port}`);
});
