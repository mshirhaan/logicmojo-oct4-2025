/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<2) {
        return x
    }

    let s = 0, e = x/2

    let ans = s

    while(s<=e) {
        let mid = Math.floor((s+e)/2)
        if(mid*mid ==x) {
            return mid
        } else if(mid*mid <x) {
            ans = mid
            s=mid+1
        } else {
            e = mid-1
        }
    }
    return ans
};