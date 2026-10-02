'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // UP - Create the 'phone' tbable
    await queryInterface.createTable(
      'phone',
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          unique: true,
          autoIncrement: true,
        },
        number: {
          type: DataTypes.STRING(20),
          allowNull: false,
          unique: true
        },
        user: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
          model: 'user',
          key: 'id',
          },
          onDelete: 'RESTRICT',
          onUpdate: 'CASCADE',
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      }
    );
  },

  async down (queryInterface, Sequelize) {
    // Down - Drop the 'phone'  table
    await queryInterface.dropTable('phone');
  }
};
