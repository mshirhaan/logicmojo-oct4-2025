var solveNQueens = function (n) {
    let ans = []
    helperPlaceQueen(0, n, [], ans)
    return ans
};

function helperPlaceQueen(row, n, board, ans) {
    if (row == n) {
        ans.push(generateBoard(board))
    }
    for (let col = 0; col < n; col++) {
        if (canIPlace(row, col, board, n)) {
            board[row] = col;
            helperPlaceQueen(row + 1, n, board, ans)
        }
    }
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

function generateBoard(board) {
    let ans = []
    for (let row = 0; row < board.length; row++) {
        let str = Array(board.length).fill('.')
        str[board[row]] = 'Q'
        ans.push(str.join(''))
    }
    return ans
}