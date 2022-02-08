const Sequelize = require("sequelize");

const config = {
  DBHost: process.env.DBHost || "localhost",
  DBPort: process.env.DBPort || 3306,
  DBUser: process.env.DBUser || "root",
  DBpassword: process.env.DBPassword || "",
  DBName: process.env.DBName || "test",
  dialect: process.env.dialect || "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

const db = new Sequelize(
  config.DBName,
  config.DBUser,
  config.DBpassword,
  {
    host: config.DBHost,
    dialect: config.dialect,
    pool: config.pool,
    logging: false,
  }
);

module.exports = db;
