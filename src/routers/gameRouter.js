const express = require("express");
const gameController = require("./../controllers/gameController");
const gameEvent = require("./../middleware/gameEvent");

module.exports = function (io) {
    let router = express.Router();
    gameEvent.gameSocket(io);
    gameEvent.gameInit();

    const socketTransmission = function (req, res, next) {
        // middleware running to one route only.
        req.app.locals.socket = io;
        next();
    };

    router.get("/", socketTransmission, gameController.index);

    return router;
};
