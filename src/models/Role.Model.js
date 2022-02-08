const { Sequelize } = require("sequelize");
const db = require("../config");

const Role = db.define("roles", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = Role;
