module.exports = (sequelize, DataTypes) => {
    const Teacher = sequelize.define("teacher", {
        id: {
            field: 'id',
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        first_name: {
            field: 'first_name',
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        last_name: {
            field: 'last_name',
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        age: {
            field: 'age',
            type: DataTypes.INTEGER(4),
            allowNull: false,
        }
    });

    return Teacher;
};