const express = require("express");
const path = require("path");
const app = express();
const serverConfig = require("./config/serverConfig");
const server = require("http").createServer(app);
const io = require('./middleware/socketMiddleware').listen(server);
// const io = require("socket.io")(server);

// setup engine
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// setup router
app.use("/", require(__dirname + "/routers/homeRouter"));

// setup socket
// io.set('match origin protocol', true);
// io.set('origins', '*:*');

// show info server
server.listen(serverConfig.PORT, serverConfig.ADDRESS, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log("SERVER: http://%s:%s", host, port);
});
