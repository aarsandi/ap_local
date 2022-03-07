'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserElearning extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserElearning.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    fullname: DataTypes.STRING,
    document: DataTypes.TEXT,
    email: DataTypes.STRING,
    address: DataTypes.TEXT,
    phoneNumber: DataTypes.STRING,
    isApproved: DataTypes.BOOLEAN,
    linkedin: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserElearning',
  });
  return UserElearning;
};