

module.exports.listen = function (server) {
    var io = require("socket.io")(server);

    io.on("connection", function (socket) {
        // code here
        console.log("user connected:" + socket.id);
        

        socket.on("disconnect", () => {
            console.log("user disconnected" + socket.id);
        });
    });
    return io;
};
