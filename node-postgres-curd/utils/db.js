// connection postgres
// Sequelize: A sequelize is a promise-based ORM for Node.
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.PG_DB,
  process.env.PG_USER,
  process.env.PG_PASSWORD,
  {
    // to create connection between DB and application
    // running in container with ip's or container names
    host: process.env.PG_HOST,
    dialect: "postgres",
  }
);

module.exports = sequelize;
