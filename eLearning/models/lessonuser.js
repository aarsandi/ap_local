'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LessonUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  LessonUser.init({
    LessonId: DataTypes.INTEGER,
    CourseUserId: DataTypes.INTEGER,
    score: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'LessonUser',
  });
  return LessonUser;
};