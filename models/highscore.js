const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Highscore extends Model {}

Highscore.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        highscore: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gamename: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "highscore",
    }
);

module.exports = Highscore;
