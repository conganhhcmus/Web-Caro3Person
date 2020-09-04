const db = require("./../config/databaseConfig");
const tbName = "ROOM";
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
            return results.rows;
        });
    },

    create: async (Board, Turn) => {
        let Join_Date = new Date();
        const queryText = `INSERT INTO ${tbName} (BOARD, TURN, JOIN_DATE) VALUES ($1, $2, $3)`;
        await db.query(
            queryText,
            [Board, Turn, Join_Date],
            (error, results) => {
                if (error) {
                    // console.error(error);
                    throw error;
                }
                return results.insertId;
            }
        );
    },

    update: async (Id, Board, Turn) => {
        let Join_Date = new Date();
        const queryText = `UPDATE ${tbName} SET BOARD = $1, TURN = $2, JOIN_DATE = $3 WHERE ID = $4`;
        await db.query(
            queryText,
            [Board, Turn, Join_Date, Id],
            (error, results) => {
                if (error) {
                    // console.error(error);
                    throw error;
                }
                return results;
            }
        );
    },

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
};