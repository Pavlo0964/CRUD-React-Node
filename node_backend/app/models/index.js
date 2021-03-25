const Sequelize = require("sequelize");

//Mysql
//const dbConfig = require("../config/db.config.js");
//const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//  host: dbConfig.HOST,
//  dialect: dbConfig.dialect,
//  operatorsAliases: false,
//});

//SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;
