'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserEprescription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserEprescription.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    fullname: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    isApproved: DataTypes.BOOLEAN,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserEprescription',
  });
  return UserEprescription;
};