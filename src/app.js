const express = require("express");
const path = require("path");
const app = express();
const serverConfig = require("./config/serverConfig");
const server = require("http").createServer(app);
const io = require("./config/socketConfig").listen(server);
const passport = require("passport");
const bodyParser = require('body-parser');
const session = require("express-session");

// setup engine
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

require("./config/passportConfig")(passport);

app.use(
    session({
        secret: serverConfig.SESSION_SECRET,
        saveUninitialized: true,
        resave: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());

// setup router
app.use("/", require(__dirname + "/routers/homeRouter")(io));
app.use("/game", require(__dirname + "/routers/gameRouter")(io));

// setup socket
// io.set('match origin protocol', true);
// io.set('origins', '*:*');

// show info server
server.listen(serverConfig.PORT, serverConfig.ADDRESS, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log("SERVER: http://%s:%s", host, port);
});
