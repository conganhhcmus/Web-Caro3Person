const express = require("express");
const homeController = require("../controllers/homeController");
const roomValidate = require("./../middleware/roomValidate");

module.exports = function (io) {
    let router = express.Router();
    const socketTransmission = function (req, res, next) {
        // middleware running to one route only.
        req.app.locals.socket = io;
        next();
    };

    router.get("/", socketTransmission, homeController.home);
    router.post(
        "/room",
        socketTransmission,
        roomValidate.check,
        homeController.createRoom
    );
    return router;
};
