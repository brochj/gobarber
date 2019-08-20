import { Router } from 'express'; // Importa apenas o Router, e nao o express inteiro

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);

export default routes;
