'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ElearningTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ElearningTransaction.init({
    UserId: DataTypes.INTEGER,
    totalPrice: DataTypes.FLOAT,
    paymentMethod: DataTypes.STRING,
    transactionDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ElearningTransaction',
  });
  return ElearningTransaction;
};