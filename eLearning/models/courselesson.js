'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CourseLesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CourseLesson.init({
    CourseId: DataTypes.INTEGER,
    LessonId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CourseLesson',
  });
  return CourseLesson;
};