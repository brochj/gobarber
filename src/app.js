import express from 'express';
import path from 'path';
import routes from './routes';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json()); // agora o projeto aceita reqs no formato JSON
    // express.static = eh pra servir arquivo estaticos, como imgs,css,html
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes); // rotas tmbm funcionam como middlewares
  }
}

export default new App().server; // exportando uma nova instancia de App()
