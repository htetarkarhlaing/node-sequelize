const { Sequelize } = require("sequelize");
const db = require("../config");

const User = db.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.ENUM("active", "inactive"),
  }
});

module.exports = User;
