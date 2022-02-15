"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("meet_greets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      event_id: { allowNull: false, type: Sequelize.INTEGER },
      band_id: { allowNull: false, type: Sequelize.INTEGER },
      meet_start_time: { allowNull: false, type: Sequelize.DATE },
      meet_end_time: { allowNull: false, type: Sequelize.DATE },
      meet_greet_id: { allowNull: false, type: Sequelize.INTEGER },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("meet_greets");
  },
};
