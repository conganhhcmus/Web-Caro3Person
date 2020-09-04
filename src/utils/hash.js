const bcrypt = require("bcrypt");

module.exports = {
    getHash: async (password) => {
        const saltRounds = 10;
        let salt = bcrypt.genSaltSync(saltRounds);
        let pwHash = bcrypt.hashSync(password, salt);
        return pwHash;
    },

    compareHash: async (password, pwH) => {
        const hash = await bcrypt.compareSync(password, pwH);
        if (hash) {
            return true;
        }
        return false;
    },
};
