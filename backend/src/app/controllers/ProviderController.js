import User from '../models/User';
import File from '../models/File';

class ProviderController {
  async index(req, res) {
    const providers = await User.findAll({
      where: { provider: true },
      attributes: ['id', 'name', 'email', 'avatar_id'], // filtrando os dados uteis
      include: [
        // inclui os dados da tabela files referente ao avatar_id
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'], // url 'e VIRTUAL, ver no model File
        },
      ],
    });

    return res.json(providers);
  }
}

export default new ProviderController();
