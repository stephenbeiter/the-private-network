const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model { }

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    },
    profile_img: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isURL: true
      }
    },
    last_login: {
      type: DataTypes.TIME,
      allowNull: true
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;