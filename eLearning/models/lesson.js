'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Lesson.belongsToMany(models.Course, {
        through: 'CourseLessons',
        as: 'Lessons',
        foreignKey: 'LessonId'
      })
    }
  };
  Lesson.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    video: DataTypes.TEXT,
    file: DataTypes.TEXT,
    minimumScore: DataTypes.FLOAT,
    maximumRetest: DataTypes.FLOAT,
    isQuiz: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Lesson',
  });
  return Lesson;
};