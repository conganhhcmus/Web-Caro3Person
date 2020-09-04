// const gameUtils = require("../utils/gameUtils")
const roomModel = require("../models/roomModel");
const userModel = require("../models/userModel");
const hash = require("./../utils/hash");

exports.home = function (req, res) {
    let rooms = {};
    res.render("home", { rooms: rooms });
};

exports.createRoom = function (req, res) {
    let io = req.app.locals.socket;
    let rooms = {};
    // res.render("home", { rooms: rooms });

    //get data room
    res.redirect("/");

    io.emit("room-created", req.body.room);
};

exports.login = function (req, res) {
    let username = req.body.userName;
    let password = req.body.passWord;

    // console.log(username + " : "+password);
    res.send(username + " : " + password);
};

exports.register = async function (req, res) {
    let username = req.body.userName;
    let password = req.body.passWord;
    let hash_password = await hash.getHash(password);
    // userModel.createUser(username, hash_password);
    //auth
};

exports.checkUser = async function (req, res) {
    let username = req.body.userName;
    // console.log(username);
    const count = await userModel.countByUsername(username);
    console.log(count);
    if (count > 0) {
        
        res.send("Exist");
    } else res.send(null);
    // res.send(null);
};
