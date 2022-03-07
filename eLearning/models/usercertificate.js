'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCertificate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserCertificate.init({
    UserId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    createdDate: DataTypes.DATE,
    expiredDate: DataTypes.DATE,
    certificateNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserCertificate',
  });
  return UserCertificate;
};