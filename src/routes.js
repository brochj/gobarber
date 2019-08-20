import { Router } from 'express'; // Importa apenas o Router, e nao o express inteiro
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Oscar Broch',
    email: 'brochj@gmail.com',
    password_hash: 'fddsf3423432df3r',
  });
  return res.json(user);
});

export default routes;
