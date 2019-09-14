// Toda config de upload de arquivos
import multer from 'multer';
import crypto from 'crypto'; // do node

import { extname, resolve } from 'path';
// extname , retira a extensao do arquivo

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, callback) => {
      // req, tem aquele mesmo conteudo dos controllers
      // file - todos os dados do arquivo que o usuario fez upload
      // gerar nome unico
      crypto.randomBytes(16, (err, res) => {
        if (err) return callback(err);

        // passo o null, pq o primeiro parametro é pra qndo da erro
        return callback(null, res.toString('hex') + extname(file.originalname)); // transformo os 16 bytes em uma string hexadecimal
      });
    },
  }),
};
