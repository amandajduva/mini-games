const router = require("express").Router();
const { Highscore, User } = require("../../models");

router
    .post("/save", (req, res) => {
        try {
            Highscore.create({
                highscore: req.body.highscore,
                gamename: req.body.gamename,
                userId: req.session.user_id,
            }).then((dbScoreData) => {
                res.json(dbScoreData);
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    });

router.get("/gamescores/:gamename", (req, res) => {
    Highscore.findAll({
        where: {
            gamename: req.params.gamename
        },
        attributes: [
            "highscore",
            "gamename",
            "createdAt"
        ],
        order: [["highscore", "DESC"]],
        include: [{
            model: User,
            attributes: ["gamertag"]
        },
        ]
    })
        .then(dbScoreData => {
            if (!dbScoreData) {
                res.status(404).json({ message: "No scores for this game" });
                return;
            }
            res.json(dbScoreData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get("/myscores/:gamename", (req, res) => {
    Highscore.findAll({
        where: {
            gamename: req.params.gamename
        },
        attributes: [
            "highscore",
            "gamename",
            "createdAt"
        ],
        order: [["highscore", "DESC"]],
        include: [{
            model: User,
            where: {
                id: req.session.user_id
            },
            attributes: ["gamertag"]
        },
        ]
    })
        .then(dbScoreData => {
            if (!dbScoreData) {
                res.status(404).json({ message: "No scores for this game" });
                return;
            }
            res.json(dbScoreData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;