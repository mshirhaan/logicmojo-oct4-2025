var longestIncreasingPath = function(matrix) {
    let longestPath = 0
    if (matrix == null || matrix.length == 0)
            return 0;
    
    const memo = Array.from({ length: matrix.length }, () => new Array(matrix[0].length));
    //console.log(memo)

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            //Update longestPath with max encountered so far
            const pathLength = dfsHelper(i,j,-1, memo)
            longestPath = Math.max(pathLength, longestPath)
        }
    }

    function dfsHelper(i,j, prevElement, memo) {
        if(i<0 || j<0 || i>=matrix.length || j>= matrix[0].length || prevElement >= matrix[i][j]) {
            return 0
        }

        if(memo[i][j] != undefined) {
            return memo[i][j]
        }
        
        const downMax = dfsHelper(i+1,j, matrix[i][j], memo)
        const rightMax = dfsHelper(i,j+1, matrix[i][j], memo)
        const upMax = dfsHelper(i-1,j, matrix[i][j], memo)
        const leftMax = dfsHelper(i,j-1, matrix[i][j], memo)
        const maxLength = Math.max(downMax, rightMax, upMax, leftMax)
        memo[i][j] = 1+maxLength
        return memo[i][j]
    }


    return longestPath;
};