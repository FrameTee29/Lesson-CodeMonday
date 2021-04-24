module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define("course", {
    course_id: {
      field: "course_id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    course_name: {
      field: "course_name",
      type: DataTypes.STRING(255),
      allowNull: false
    },
    course_description: {
      field: "course_description",
      type: DataTypes.TEXT,
      allowNull: false
    },
    teacher_id: {
      field: "teacher_id",
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  })

  return Course
}
