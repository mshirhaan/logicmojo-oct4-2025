/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    return helper(0, n)
};


function helper(i, n) {
    if(i > n) {
        return 0;
    }
    if(i == n) {
        return 1
    }

    let left = helper(i+1, n)

    let right = helper(i+2, n)

    return left+right
}