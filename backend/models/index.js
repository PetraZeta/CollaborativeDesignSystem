
const sequelize = require('../db');
const Component = require('./component');
const User = require('./user');
const ChangeLog = require('./changeLog');

const models = {
  sequelize,
  Component,
  User,
  ChangeLog
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = {
  ...models,
  sequelize
};