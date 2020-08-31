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

    checkWinLose: (board, value) => {},

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
