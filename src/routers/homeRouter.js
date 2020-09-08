const express = require("express");
const homeController = require("../controllers/homeController");
// const roomEvent = require("./../middleware/roomEvent");

module.exports = function (io) {
    let router = express.Router();
    const socketTransmission = function (req, res, next) {
        // middleware running to one route only.
        req.app.locals.socket = io;
        next();
    };

    router.get("/", socketTransmission, homeController.home);

    router.get("/logout", socketTransmission, homeController.logout);

    router.post("/room", socketTransmission, homeController.createRoom);

    router.post("/login", socketTransmission, homeController.login);

    router.post("/register", socketTransmission, homeController.register);

    router.post("/checkUser", socketTransmission, homeController.checkUser);
    return router;
};
