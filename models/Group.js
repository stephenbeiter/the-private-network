const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Group extends Model { }

Group.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    groupname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    group_admin: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Public"
    },
    group_img: {
      type: DataTypes.STRING,
      allowNull: true
    },
    group_color: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "blue"
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'group'
  }
);

module.exports = Group;