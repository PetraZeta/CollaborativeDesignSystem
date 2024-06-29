'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class ChangeLog extends Model {
  static associate(models) {
    // Associations with Component and User
    this.belongsTo(models.Component, { foreignKey: 'componentId', as: 'component' });
    this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  }
}

ChangeLog.init({
  componentId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Component',
      key: 'id'
    }
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'User',
      key: 'id'
    }
  },
  changeDescription: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'ChangeLog',
});

module.exports = ChangeLog;
