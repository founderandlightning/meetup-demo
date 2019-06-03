const { format } = require("sql-formatter");
const highlightSql = require("sequelize-log-syntax-colors");

const DOCKER_DEV_DATABASE_URL =
  "postgres://postgres:postgres@localhost:5434/dev";
const DOCKER_TEST_DATABASE_URL =
  "postgres://postgres:postgres@localhost:5433/test";

const config = {
  development: {
    url: process.env.DEV_DATABASE_URL || DOCKER_DEV_DATABASE_URL,
    sync: false,
    logging: text => console.log(highlightSql(format(text))), // eslint-disable-line no-console,
    ssl: false,
    dialectOptions: {
      ssl: false
    }
  },
  test: {
    url: process.env.TEST_DATABASE_URL || DOCKER_TEST_DATABASE_URL,
    sync: process.env.SYNC_DATABASE || false,
    logging: false,
    ssl: false,
    dialectOptions: {
      ssl: false
    }
  }
};
module.exports = config;
