const db = require("./../config/databaseConfig");

exports.query = (queryText, params) => {
    /**
     * DB Query
     * @param {object} req
     * @param {object} res
     * @returns {object} object
     */

    return new Promise((resolve, reject) => {
        db.query(queryText, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
