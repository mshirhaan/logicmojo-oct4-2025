var minPathSum = function(grid) {
    let rowLen = grid.length
    let colLen = grid[0].length

    let table = Array(grid.length)

    for(let i = 0; i<grid.length; i++) {
        table[i] = Array(grid[0].length);
    }

    table[rowLen-1][colLen-1] = grid[rowLen-1][colLen-1]

    for(let row = rowLen-2; row>=0; row--) {
        table[row][colLen-1] = grid[row][colLen-1]+table[row+1][colLen-1]
    }

    for(let col = colLen-2; col>=0; col--) {
        table[rowLen-1][col] = grid[rowLen-1][col]+table[rowLen-1][col+1]
    }

    for(let row = rowLen-2; row>=0; row--) {
        for(let col = colLen-2; col>=0; col--) {
            table[row][col] =  grid[row][col] + Math.min(table[row][col+1], table[row+1][col])
        }
    }

    return table[0][0]

};


var minPathSum = function(grid) {
    let rowLen = grid.length
    let colLen = grid[0].length
    let ans = Array(colLen)
    ans[colLen-1] = grid[rowLen-1][colLen-1]

    for(let col = colLen-2; col>=0;col--) {
        ans[col] = grid[rowLen-1][col] + ans[col+1]
    }

    for(let row = rowLen-2; row>=0;row--) {
        ans[colLen-1] = grid[row][colLen-1] + ans[colLen-1]
        for(let col = colLen-2; col>=0; col--) {
            ans[col] = grid[row][col] + Math.min(ans[col+1] , ans[col])
        }
    }

    return ans[0]
};