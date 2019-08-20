import { Router } from 'express'; // Importa apenas o Router, e nao o express inteiro

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ msg: 'Hello World' });
});

export default routes;
