const User = require("./user");
const Highscore = require("./highscore");
const Games = require("./games");

User.hasMany(Highscore, {
    foreignKey: "id",
    onDelete: "CASCADE"
});

Highscore.belongsTo(User, {
    foreignKey: "id"
});

Games.belongsToMany(User, {
    through: {
        model: Highscore,
        unique: false 
    },
    as: "game_user"
});

module.exports = { User, Highscore, Games };