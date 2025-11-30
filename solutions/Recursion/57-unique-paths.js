/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    return helper(0,0)

    function helper(r,c) {
        if(r == m-1 && c == n-1) {
            return 1
        }
        if(r == m || c == n) {
            return 0
        }
        let right = helper(r,c+1)
        let down = helper(r+1, c)
        return right + down
    }
};
