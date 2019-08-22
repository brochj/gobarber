import { Router } from 'express'; // Importa apenas o Router, e nao o express inteiro
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // todas as rotas abaixo terao esse middleware

routes.put('/users', UserController.update);

// single -  um arquivo, file- nome do campo que vai ser enviado na requisicao
routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
});

export default routes;
