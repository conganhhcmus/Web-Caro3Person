const gameUtils = require("../utils/gameUtils");
const variableConfig = require("../config/variableConfig");
const gameModel = require("./../models/gameModel");
const width = variableConfig.WIDTH;
const height = variableConfig.HEIGHT;
const boxSize = variableConfig.BOX_SIZE;
var Users = [];
var Turn = -1;
var Board = gameUtils.board(height, width, 0);

exports.gameInit = async function () {
    // await gameModel.create(gameUtils.boardToString(height, width, Board), Turn);
    // console.log("Create Game");
};

exports.gameSocket = function (io) {
    io.on("connection", function (socket) {
        // event register user
        socket.on("register-user", function (data) {
            // console.log(socket.id);
            if (Users.length < 3) {
                Users.push(data);
                socket.Username = data;
                io.sockets.emit("list-user", Users);
            }
            // console.log(Users);
        });

        socket.on("send-turn", function (data) {
            var userIndex = Users.indexOf(socket.Username);
            // console.log(userIndex);
            let Col = data.x / boxSize;
            let Row = data.y / boxSize;
            let value = userIndex + 1;
            if (userIndex === (Turn + 1 > 2 ? 0 : Turn + 1)) {
                Turn = Turn + 1 > 2 ? 0 : Turn + 1;
                // console.log("Turn" + Turn);

                if (Board[Row][Col] === 0) {
                    Board[Row][Col] = value;
                    io.sockets.emit("data", {
                        name: socket.Username,
                        x: data.x,
                        y: data.y,
                        userId: userIndex,
                        ArrId: Turn,
                        Board: Board,
                        value: value,
                    });
                }

                gameModel.update(
                    1,
                    gameUtils.boardToString(height, width, Board),
                    Turn
                );

                // check win/lose
                if (gameUtils.checkWinLose(Board, Row, Col)) {
                    io.emit("win-lose", Users[Turn]);
                    io.emit("disable-click");
                }
            }
        });
    });
};
