const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const userModel = require("./../models/userModel");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
    const user = await userModel.getById(id);
    done(null, user[0]);
});

module.exports = function (passport) {
    passport.use(
        new LocalStrategy(async (username, password, done) => {
            //aaa
            let user = await userModel.getUser(username);
            let check = await hash.compareHash(password, user[0].pass_word);
            if (check) return done(null, user[0]);
            else return null, false;
        })
    );
};
