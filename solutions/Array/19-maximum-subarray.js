//TC: O(n)
var maxSubArray = function(nums) {
    let max = nums[0]

    let sum = 0
    for(let num of nums) {
        sum+=num
        if(num > sum) {
            sum = num
        }
        max = Math.max(max, sum)
    }
    return max
};