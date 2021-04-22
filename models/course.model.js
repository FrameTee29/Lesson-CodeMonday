module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define("course", {
    id: {
      field: "id",
      type: DataTypes.INTEGER(10),
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
      type: DataTypes.TEXT(),
      allowNull: false
    }
  })

  return Course
}
