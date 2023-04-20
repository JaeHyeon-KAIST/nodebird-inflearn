const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: "jaehyeon",
    password: process.env.DB_PASSWORD,
    database: "react-nodebird",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "jaehyeon",
    password: process.env.DB_PASSWORD,
    database: "react-nodebird",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "jaehyeon",
    password: process.env.DB_PASSWORD,
    database: "react-nodebird",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
