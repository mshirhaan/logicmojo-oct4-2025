/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let start = 1
    let end = Math.max(...piles)
    let ans = end;


    while(start <=end) {
        let mid = Math.floor((start+end)/2)
        if(canEatAtK(mid, h)) {
            ans = mid
            end = mid-1
        } else {
            start = mid+1
        }
    }
    return ans


    function canEatAtK(k, h) {
        for(let i = 0; i<piles.length; i++) {
            h-= Math.ceil(piles[i]/k)
            if(h<0) {
                return false
            }
        }
        return true
    }
};