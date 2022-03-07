'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CourseUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CourseUser.init({
    UserElearningId: DataTypes.INTEGER,
    CourseId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    expiredDate: DataTypes.DATE,
    totalScore: DataTypes.FLOAT,
    TransactionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CourseUser',
  });
  return CourseUser;
};