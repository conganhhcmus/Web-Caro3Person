const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const userModel = require("./../models/userModel");

passport.serializeUser((user, done) => {
    done(null, user.ID);
});

passport.deserializeUser(async function (id, done) {
    const user = await userModel.getById(id);
    done(null, user);
});

module.exports = function (passport) {
    passport.use(
        "login",
        new LocalStrategy((username, password, done) => {
            //aaa
        })
    );
    passport.use(
        "signup",
        new LocalStrategy((username, password, done) => {
            //aaa
        })
    );
};
