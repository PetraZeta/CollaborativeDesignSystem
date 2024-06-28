'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Component extends Model {}

Component.init({
  name: DataTypes.STRING,
  description: DataTypes.TEXT
}, {
  sequelize,
  modelName: 'Component',
});

module.exports = Component;