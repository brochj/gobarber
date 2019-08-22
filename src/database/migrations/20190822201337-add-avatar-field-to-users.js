module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users', // qual tabela
      'avatar_id', // qual nome da coluna
      {
        type: Sequelize.INTEGER,
        // Resumindo, todo avatar_id, tmbm vai ser um id contido na tabela files
        references: { model: 'files', key: 'id' }, // foreign key
        // Se o avatar_id (table users) for alterado, repassa a alteracao em id (table files)
        onUpdate: 'CASCADE',
        // Se o avatar_id (table users) for deletado, seta null no id (table files)
        onDelete: 'SET NULL',
        allowNull: true,
      }
    );
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
