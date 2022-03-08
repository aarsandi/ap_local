'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CourseUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserElearningId: {
        type: Sequelize.INTEGER,
        references: { 
          model: 'UserElearnings',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      CourseId: {
        type: Sequelize.INTEGER,
        references: { 
          model: 'Courses',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      startDate: {
        type: Sequelize.DATE
      },
      expiredDate: {
        type: Sequelize.DATE
      },
      totalScore: {
        type: Sequelize.FLOAT
      },
      TransactionId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CourseUsers');
  }
};