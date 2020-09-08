// const gameUtils = require("../utils/gameUtils")
const roomModel = require("../models/roomModel");
const userModel = require("../models/userModel");
const hash = require("./../utils/hash");
const passport = require("passport");

exports.home = function (req, res) {
    const user = req.user;

    let rooms = {};
    res.render("home", { rooms: rooms, user: user });
};

exports.createRoom = function (req, res) {
    let io = req.app.locals.socket;
    let rooms = {};
    // res.render("home", { rooms: rooms });

    //get data room
    res.redirect("/");

    io.emit("room-created", req.body.room);
};

exports.login = async function (req, res) {
    let username = req.body.userName;
    let password = req.body.passWord;

    let user = await userModel.getUser(username);
    let check = await hash.compareHash(password, user[0].pass_word);
    // console.log(check);
    // if (check) res.send(user[0]);
    // else res.send("login fail");

    req.logIn(user[0], function (err) {
        if (err) {
            return res.send("login fail");
        }
        return res.send(user[0]);
    });
};

exports.register = async function (req, res) {
    let username = req.body.userName;
    let password = req.body.passWord;
    let hash_password = await hash.getHash(password);
    let user = await userModel.createUser(username, hash_password);
    //auth
    console.log(user[0]);
    req.logIn(user[0], function (err) {
        if (err) {
            return res.send("false");
        }
        return res.send("true");
    });
};

exports.checkUser = async function (req, res) {
    let username = req.body.userName;
    // console.log(username);
    const count = await userModel.countByUsername(username);
    // console.log(count);
    if (count > 0) {
        res.send("Exist");
    } else res.send(null);
};

exports.logout = async function (req, res) {
    req.logout();
    res.redirect("/");
};
