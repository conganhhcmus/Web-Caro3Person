// const gameUtils = require("../utils/gameUtils")
const gameModel = require("./../models/gameModel");

exports.index = async function (req, res) {
    let data = await gameModel.getById(1);
    console.log(data);
    res.render("game");
};
