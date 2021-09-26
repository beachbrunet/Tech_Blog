const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class user extends Model {}

user.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    something: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    something: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    something: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "gallery",
  }
);

module.exports = user;
