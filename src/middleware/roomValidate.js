exports.check = function (req, res, next) {
    console.log("check room!");
    let io = req.app.locals.socket;

    // Send message that new room was created
    io.emit("room-created", req.params.room);

    next();
};
