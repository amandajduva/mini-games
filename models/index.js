const User = require("./user");
const Highscore = require("./highscore");
// const Games = require("./games");

User.hasMany(Highscore);

Highscore.belongsTo(User);

// Games.belongsToMany(User, {
//     through: {
//         model: Highscore,
//         unique: false 
//     },
//     as: "game_user"
// });

module.exports = { User, Highscore };