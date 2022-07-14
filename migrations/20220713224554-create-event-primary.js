"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("events", "event_id", {
      autoIncrement: true,
      primaryKey: true,
    },
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("stages");
  },
};
