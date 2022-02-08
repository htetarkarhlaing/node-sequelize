const User = require("./User.Model");
const Role = require("./Role.Model");

// User.hasOne(Role), {
//   foreignKey: 'id'
// };

const Model = {
  User,
  Role,
};

module.exports = Model;
