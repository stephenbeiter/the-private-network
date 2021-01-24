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
      type: DataTypes.INTEGER,
      allowNull: false
    },
    group_img: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "https://stroseschool.stroselions.net/wp-content/uploads/2018/04/profile-blank-reva-240x300.png",
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