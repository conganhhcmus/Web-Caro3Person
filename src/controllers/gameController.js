// const gameUtils = require("../utils/gameUtils")
const gameModel = require("./../models/gameModel");

exports.index = async function (req, res) {
    let data = await gameModel.getById(1);
    
    // console.log(await gameModel.getById(1));
    res.render("game");
};
