/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if(s.length == 1) {
        return s;
    }
    //odd
    let max = 1;
    let ans = s[0];
    for (let mid = 0; mid<s.length; mid++) {
        let i = mid-1
        let j = mid+1

        while(i >= 0 && j < s.length) {
            if(s[i] != s[j]) break
            if(j-i+1 > max) {
                max = j-i+1;
                ans = s.substring(i, j+1)
            }
            i--;
            j++;
        }
    }


    //even
    for (let mid = 0; mid<s.length; mid++) {
        let i = mid
        let j = mid+1

        while(i >= 0 && j < s.length) {
            if(s[i] != s[j]) break
            if(j-i+1 > max) {
                max = j-i+1;
                ans = s.substring(i, j+1)
            }
            i--;
            j++;
        }
    }
    
    return ans
};