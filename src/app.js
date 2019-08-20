const express = require('express');
const routes = require('./routes');

class App {
  constructor(){
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(express.json()); // agora o projeto aceita reqs no formato JSON
  }

  routes(){
    this.server.use(routes) // rotas tmbm funcionam como middlewares
  }

}

module.exports = new App().server; //exportando uma nova instancia de App()