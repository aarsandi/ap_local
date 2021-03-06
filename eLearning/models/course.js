'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.belongsTo(models.CourseCategory)
      Course.belongsToMany(models.Lesson, {
        through: 'CourseLessons',
        as: 'Lessons',
        foreignKey: 'CourseId'
      })
    }
  };
  Course.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    status: DataTypes.STRING,
    CourseCategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};