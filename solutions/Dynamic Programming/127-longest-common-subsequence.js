var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    
    // Create 2D memo array filled with -1
    const memo = Array.from({ length: m }, () => Array(n).fill(-1));
    
    return helper(0, 0);
    
    function helper(i, j) {
        if (i === m || j === n) {
            return 0;
        }
        
        if (memo[i][j] !== -1) {
            return memo[i][j];
        }
        
        if (text1[i] === text2[j]) {
            memo[i][j] = 1 + helper(i + 1, j + 1);
        } else {
            memo[i][j] = Math.max(
                helper(i, j + 1),
                helper(i + 1, j)
            );
        }
        
        return memo[i][j];
    }
};