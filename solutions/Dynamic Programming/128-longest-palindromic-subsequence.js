/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    
    return longestCommonSubsequence(s, s.split("").toReversed().join(""))
};


var longestCommonSubsequence = function(s1, s2) {
    let map = []
    for(let i = 0; i<s1.length; i++) {
        map[i] = []
    }
   
    return helper(0, 0, map)

    function helper(i, j, map) {
        
        if(i == s1.length || j == s2.length) {
            return 0;
        }

        if(map[i][j] != undefined) {
            return map[i][j]
        }

        if(s1[i] == s2[j]) {
            map[i][j] = 1 + helper(i+1, j+1, map);
            return map[i][j]
        } else {
            map[i][j] = Math.max(helper(i+1, j, map), helper(i, j+1, map));
            return map[i][j]
        }
    }
}