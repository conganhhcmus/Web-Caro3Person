const serverConfig = {};

serverConfig.PORT = process.env.PORT || 3000;
serverConfig.ADDRESS = process.env.ADDRESS || "localhost";
serverConfig.SESSION_SECRET = process.env.SESSION_SECRET || "secret";

module.exports = serverConfig;
