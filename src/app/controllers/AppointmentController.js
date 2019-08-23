import * as Yup from 'yup';
import Appointment from '../models/Appointment';
import User from '../models/User';

class AppointmentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      provider_id: Yup.number().required('provider_id was not provided'),
      date: Yup.date().required('date was not provided'),
    });

    schema
      .validate(req.body)
      .catch(e =>
        res.status(400).json({ error: `Validation fails: ${e.message}` })
      );

    const { provider_id, date } = req.body;

    /**
     * Check if provider_is is a provider
     */
    const checkIsProvider = await User.findOne({
      where: { id: provider_id, provider: true },
    });

    if (!checkIsProvider) {
      return res
        .status(401)
        .json({ error: 'You can only create appointments with providers' });
    }

    const appointment = await Appointment.create({
      user_id: req.userId,
      provider_id,
      date,
    });

    return res.json(appointment);
  }
}

export default new AppointmentController();
