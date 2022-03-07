'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserDoctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserDoctor.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    isApproved: DataTypes.BOOLEAN,
    document: DataTypes.TEXT,
    address: DataTypes.STRING,
    avatar: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'UserDoctor',
  });
  return UserDoctor;
};