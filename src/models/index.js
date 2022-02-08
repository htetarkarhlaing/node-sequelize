const User = require("./User.Model");
const Role = require("./Role.Model");
const UserRole = require("./UserRole.Model");

const Model = {
  User,
  Role,
  UserRole
};

User.belongsToMany(Role, { through: UserRole });
Role.belongsToMany(User, { through: UserRole });

module.exports = Model;
