'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Component extends Model {
  static associate(models) {
    // Association with ChangeLog
    this.hasMany(models.ChangeLog, { foreignKey: 'componentId', as: 'changeLogs' });
  }
}

Component.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Component',
});

module.exports = Component;