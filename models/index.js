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

Games.belongsTo(User, {
    foreignKey: "id"
});

module.exports = { User, Highscore, Games };