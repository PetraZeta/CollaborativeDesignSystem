'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class User extends Model {
  static associate(models) {
    // Association with ChangeLog
    this.hasMany(models.ChangeLog, { foreignKey: 'userId', as: 'changeLogs' });
  }
}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'User',
});

module.exports = User;