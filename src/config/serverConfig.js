const serverConfig = {};

serverConfig.PORT = process.env.PORT || 3000;
serverConfig.ADDRESS = process.env.ADDRESS || "localhost";

module.exports = serverConfig;
