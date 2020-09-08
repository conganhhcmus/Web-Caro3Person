const db = require("./../config/databaseConfig");
const tbName = "ACCOUNT";
db.on("connect", () => {
    console.log("connected to the db");
});

module.exports = {
    getById: async (id) => {
        return new Promise((resolve, reject) => {
            const queryText = `SELECT * FROM ${tbName} WHERE ID = $1`;
            db.query(queryText, [parseInt(id)], (error, results) => {
                if (error) {
                    // console.error(error);
                    // throw error;
                    reject(error);
                }
                // console.log(results.rows);
                // return results.rows;
                resolve(results.rows);
            });
        });
    },

    countByUsername: async (username) => {
        return new Promise((resolve, reject) => {
            const queryText = `SELECT * FROM ${tbName} WHERE USER_NAME = $1`;
            db.query(queryText, [username], (error, results) => {
                if (error) {
                    // console.error(error);
                    reject(error);
                    // throw error;
                }
                // console.log(results.rows.length);
                resolve(results.rows.length);
            });
        });
    },

    createUser: async (username, password) => {
        return new Promise((resolve, reject) => {
            let Join_Date = new Date();
            const queryText = `INSERT INTO ${tbName} (NAME, USER_NAME, PASS_WORD, JOIN_DATE) VALUES ($1, $2, $3, $4) RETURNING *`;
            db.query(
                queryText,
                [username, username, password, Join_Date],
                (error, results) => {
                    if (error) {
                        // console.error(error);
                        reject(error);
                        // throw error;
                    }
                    // console.log(results.rows.length);
                    // return results;
                    resolve(results.rows);
                }
            );
        });
    },

    getUser: async (username) => {
        return new Promise((resolve, reject) => {
            const queryText = `SELECT * FROM ${tbName} WHERE USER_NAME = $1`;
            db.query(queryText, [username], (error, results) => {
                if (error) {
                    // console.error(error);
                    // throw error;
                    reject(error);
                }
                // console.log(results.rows);
                // return results.rows;
                resolve(results.rows);
            });
        });
    },
};
