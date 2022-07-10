const fs = require("fs");
require("dotenv").config();

module.exports = {
  development: {
    username: process.env.USER_NAME_FOR_ALL_DB,
    password: process.env.PASSWORD_FOR_ALL_DB,
    database: process.env.DB_DEVELOPMENT_NAME,
    host: process.env.HOST_FOR_ALL_DB,
    port: process.env.PORT_FOR_ALL_DB,
    dialect: process.env.DIALECT_FOR_ALL_DB,
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  // test: {
  //   username: process.env.USER_NAME_FOR_ALL_DB,
  //   password: process.env.PASSWORD_FOR_ALL_DB,
  //   database: process.env.DB_TEST_NAME,
  //   host: process.env.HOST_FOR_ALL_DB,
  //   port: process.env.PORT_FOR_ALL_DB,
  //   dialect: process.env.DIALECT_FOR_ALL_DB,
  //   dialectOptions: {
  //     bigNumberStrings: true,
  //   },
  // },
  test: {
    username: process.env.HEROKU_TEST_USER,
    password: process.env.HEROKU_TEST_PASSWORD,
    database: process.env.HEROKU_TEST_DATABASE,
    host: process.env.HEROKU_TEST_HOST,
    port: process.env.HEROKU_TEST_PORT,
    dialect: "postgres",
    dialectOptions: {
      bigNumberStrings: true,
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    username: process.env.USER_NAME_FOR_ALL_DB,
    password: process.env.PASSWORD_FOR_ALL_DB,
    database: process.env.DB_PRODUCTION_NAME,
    host: process.env.HOST_FOR_ALL_DB,
    port: process.env.PORT_FOR_ALL_DB,
    dialect: process.env.DIALECT_FOR_ALL_DB,
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
};
