//TC: O(n2)
var longestCommonPrefix = function (strs) {
    let queryStr = strs[0]
    let op = ''

    for (let j = 0; j < queryStr.length; j++) {
        let flag = true
        for (let i = 1; i < strs.length; i++) {
            if (strs[i][j] != queryStr[j]) {
                flag = false
                break;
            }
        }
        if(!flag) break
        op += queryStr[j]
    }
    return op
}

//TC: O(nlogn)
var longestCommonPrefix = function (strs) {
    strs = strs.sort()

    let op = ''

    for(let i = 0; i <strs[0].length; i++) {
        if(strs[0][i]!=strs[strs.length-1][i]) {
            break
        }
        op+=strs[0][i]
    }
    return op
}