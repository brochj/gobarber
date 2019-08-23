import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        // chamando o metodo init() da classe Model
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL, // esse campo nunca vai existir no DB
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      { sequelize }
    );
    // antes de qulqr usuario ser salvo/alterado, roda-se esse o que ta dentro desse hook
    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    // Abaixo - esse model user pertence ao model file
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' }); // avatar_id sera criada na tabela de Users
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
