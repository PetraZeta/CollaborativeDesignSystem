const { Sequelize } = require('sequelize');
require('dotenv').config();

const {HOST, DB, DB_USER, DB_PASSWORD }= process.env;

const sequelize = new Sequelize(DB, DB_USER, DB_PASSWORD, {
  host: HOST,
  dialect: 'postgres'
});

// Probar la conexión
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;