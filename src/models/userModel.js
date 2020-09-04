const db = require("./../config/databaseConfig");
const tbName = "ACCOUNT";
db.on("connect", () => {
    console.log("connected to the db");
});

module.exports = {
    getById: async (id) => {
        const queryText = `SELECT * FROM ${tbName} WHERE ID = $1`;
        await db.query(queryText, [parseInt(id)], (error, results) => {
            if (error) {
                // console.error(error);
                throw error;
            }
            // console.log(results.rows);
            return results.rows;
        });
    },

    countByUsername: async (username) => {
        const queryText = `SELECT * FROM ${tbName} WHERE USER_NAME = $1`;
        await db.query(queryText, [username], (error, results) => {
            if (error) {
                // console.error(error);
                throw error;
            }
            // console.log(results.rows.length);
            return results.rows.length;
        });
    },

    createUser: async (username, password) => {
        let Join_Date = new Date();
        const queryText = `INSERT INTO ${tbName} (NAME, USER_NAME, PASS_WORD, JOIN_DATE) VALUES ($1, $2, $3, $4)`;
        await db.query(queryText, [username, username, password, Join_Date], (error, results) => {
            if (error) {
                // console.error(error);
                throw error;
            }
            // console.log(results.rows.length);
            return results;
        });
    },
};