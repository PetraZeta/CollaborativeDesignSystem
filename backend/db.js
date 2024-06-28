const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_collaborativeDS', 'postgres', '123456', {
  host: '127.0.0.1',
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