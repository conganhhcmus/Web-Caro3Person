// const gameUtils = require("../utils/gameUtils")

exports.home = function (req, res) {
    let rooms = {};
    res.render("home", { rooms: rooms });
};

exports.createRoom = function (req, res) {
    let rooms = {};
    // res.render("home", { rooms: rooms });
    res.redirect("/");
};
