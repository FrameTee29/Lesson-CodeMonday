module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define("teacher", {
    teacher_id: {
      field: "teacher_id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    first_name: {
      field: "first_name",
      type: DataTypes.STRING(50),
      allowNull: false
    },
    last_name: {
      field: "last_name",
      type: DataTypes.STRING(50),
      allowNull: false
    },
    age: {
      field: "age",
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  })

  return Teacher
}
