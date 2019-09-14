import File from '../models/File';

class FileController {
  async store(req, res) {
    // originalName - Nome do arquivo que estava na maq do usuario
    // filename - nome gerado aleatorio gerado pelo config/multer
    const { originalname: name, filename: path } = req.file; // o multer que add esse file no req.

    const file = await File.create({
      name,
      path,
    });

    return res.json(file);
  }
}

export default new FileController();
