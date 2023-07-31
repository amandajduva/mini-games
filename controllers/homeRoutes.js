const router = require("express").Router();
// const { } = require("../models");
// const withAuth = require("../utils/auth");

router.get("/gameOne", async (req, res) => {
    try {
        res.render("gameOne");
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/", async (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect("/gameLinks");
            return;
        }
        res.render("login-signup", {
            logged_in: req.session.logged_in
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/gameLinks", async (req, res) => {
    try {
        res.render("gameLinks", {
            logged_in: req.session.logged_in
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;