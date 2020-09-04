const db = require("./../config/databaseConfig");
const tbName = "VARIABLE";
db.on("connect", () => {
    console.log("connected to the db");
});

module.exports = {
    getAll: async (offset, limit) => {
        const queryText = `SELECT * FROM ${tbName} ${
            limit ? "LIMIT " + limit : ""
        } ${offset ? "OFFSET " + offset : ""}`;
        await db.query(queryText, (error, results) => {
            if (error) {
                // console.error(error);
                throw error;
            }
            return results.rows.length;
        });
    },

    update: async (value, Board, Turn) => {
        let Join_Date = new Date();
        const queryText = `UPDATE ${tbName} SET GUESTS = $1`;
        await db.query(queryText, [value], (error, results) => {
            if (error) {
                // console.error(error);
                throw error;
            }
            return results;
        });
    },
};
