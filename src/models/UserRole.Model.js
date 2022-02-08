const { Sequelize } = require("sequelize");
const User = require("./User.Model");
const Role = require("./Role.Model")
const db = require("../config");

const UserRole = db.define("userRole", {
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  roleId: {
    type: Sequelize.INTEGER,
    references: {
      model: Role,
      key: 'id'
    }
  }
});

module.exports = UserRole;
