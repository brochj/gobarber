import Notification from '../schemas/Notification';
import User from '../models/User';

class NotificationController {
  async index(req, res) {
    /**
     * Check if provider_is is a provider
     */
    const checkIsProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!checkIsProvider) {
      return res
        .status(401)
        .json({ error: 'Only provider can load notifications' });
    }

    const notifications = await Notification.find({
      user: req.userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(20);

    return res.json(notifications);
  }

  async update(req, res) {
    /**
     * Marcar notificacao como lida
     */
    // buscando a notifacao no banco de dados
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true } // retorna a notificacao atualizada
    );

    return res.json(notification);
  }
}

export default new NotificationController();
