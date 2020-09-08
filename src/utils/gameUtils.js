module.exports = {
    board: (h, w, value) => {
        let matrix = [];
        for (let i = 0; i < h; i++) {
            a = [];
            for (let j = 0; j < w; j++) {
                a[j] = value;
            }
            matrix[i] = a;
        }
        return matrix;
    },

    checkWinLose: (board, row, col) => {
        getValue = function (board, row, col) {
            if (row < 0 || col < 0 || col >= board[0].length || row >= board.length) {
                return false;
            }
            return board[row][col];
        }
        var value = board[row][col];
        var vertical = 0;
        var horizontal = 0;
        var mainCross = 0;
        var subCross = 0;
        for (let i = -5; i < 5; i++) {
            //vertical
            if (getValue(board, row, col + i) == value) {
                vertical++;
            }
            else {
                vertical = 0;
            }
            if (vertical == 4) {
                if (getValue(board, row, col + i - 4) == 0) {
                    if (getValue(board, row, col + i + 1) == 0) {
                        return true;
                    }
                }
            }
            else if (vertical == 5) {
                return true;
                //5 con 2 chiêu k an va 6 con k ăn sua tai day
            }

            //horizontal
            if (getValue(board, row + i, col) == value) {
                horizontal++;
            }
            else {
                horizontal = 0;
            }
            if (horizontal == 4) {
                if (getValue(board, row + i - 4, col) == 0) {
                    if (getValue(board, row + i + 1, col) == 0) {
                        return true;
                    }
                }
            }
            else if (horizontal == 5) {
                return true;
                //5 con 2 chiêu k an va 6 con k ăn sua tai day
            }

            //mainCross
            if (getValue(board, row + i, col + i) == value) {
                mainCross++;
            }
            else {
                mainCross = 0;
            }
            if (mainCross == 4) {
                if (getValue(board, row + i - 4, col + i - 4) == 0) {
                    if (getValue(board, row + i + 1, col + i + 1) == 0) {
                        return true;
                    }
                }
            }
            else if (mainCross == 5) {
                return true;
                //5 con 2 chiêu k an va 6 con k ăn sua tai day
            }

            //subCross
            if (getValue(board, row - i, col + i) == value) {
                subCross++;
            }
            else {
                subCross = 0;
            }
            if (subCross == 4) {
                if (getValue(board, row - i - 4, col + i - 4) == 0) {
                    if (getValue(board, row - i + 1, col + i + 1) == 0) {
                        return true;
                    }
                }
            }
            else if (subCross == 5) {
                return true;
                //5 con 2 chiêu k an va 6 con k ăn sua tai day
            }
        }
        return false;
    },

    boardToString: (h, w, board) => {
        let res = "";
        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
                res += board[i][j] + " ";
            }
        }
        return res;
    },

    stringToBoard: (h, w, str) => {
        let matrix = [];
        let arr = str.split(" ");
        let k = 0;

        for (let i = 0; i < h; i++) {
            a = [];
            for (let j = 0; j < w; j++) {
                // console.log("k:" + k + "\t value: " + arr[k]);
                a[j] = arr[k];
                k++;
            }
            matrix[i] = a;
        }
        return matrix;
    },
};
