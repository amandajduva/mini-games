const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our games model
class Games extends Model {}

// create fields/columns for games model
Games.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        game_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "games"
    }
);

module.exports = Games;
