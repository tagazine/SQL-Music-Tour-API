"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("events", 
      "name", {
        type: Sequelize.STRING,
        allowNull: false,
      },
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("events");
  },
};
