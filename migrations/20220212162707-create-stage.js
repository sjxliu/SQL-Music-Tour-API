"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("stages", {
      stage_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name_stage: { allowNull: false, type: Sequelize.TEXT },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("stages");
  },
};
