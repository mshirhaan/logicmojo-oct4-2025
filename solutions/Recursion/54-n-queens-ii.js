var totalNQueens = function (n) {
    return helperPlaceQueen(0, n, [])
};

function helperPlaceQueen(row, n, board, ) {
    if (row == n) {
        return 1
    }
    let count = 0
    for (let col = 0; col < n; col++) {
        if (canIPlace(row, col, board, n)) {
            board[row] = col;
            count+=helperPlaceQueen(row + 1, n, board)
        }
    }
    return count
}

function canIPlace(row, col, board, n) {
    // check up
    for (let i = 0; i < row; i++) {
        if (board[i] == col) {
            return false
        }
    }
    //check left upper diagonal
    let temp = 1
    for (let i = row - 1; i >= 0; i--) {
        if (col - temp < 0) {
            break
        }
        if (board[i] == col - temp) {
            return false
        }
        temp++
    }

    //check right upper diagonal
    temp = 1
    for (let i = row - 1; i >= 0; i--) {
        if (col + temp >= n) {
            break
        }
        if (board[i] == col + temp) {
            return false
        }
        temp++
    }

    return true
}

