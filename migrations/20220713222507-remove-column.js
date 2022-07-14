'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("events", 
      "id"
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("events");
  },
};
