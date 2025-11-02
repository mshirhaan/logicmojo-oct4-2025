//TC: O(n2
var longestConsecutive = function (nums) {
    if(nums.length == 0) return 0
    let s = new Set(nums)

    let max = 1

    for (let num of s) {
        let nextNum = num + 1
        let currCount = 1
        while (s.has(nextNum)) {
            currCount++
            nextNum++
            max = Math.max(max, currCount)
        }
    }

    return max
};

//TC: O(nlogn)
var longestConsecutive = function (nums) {
    if(nums.length == 0) return 0
    nums = nums.sort((a,b)=>a-b)
    
    let max = 1
    let i = 1
    count = 1
    while(i<nums.length) {
        if(nums[i] == nums[i-1]+1){
            count++;
            max = Math.max(max, count)
        } 
        else if(nums[i] != nums[i-1]) {
            count = 1
        }
        i++
    }

    return max
};


//TC: O(n)
var longestConsecutive = function (nums) {
    if(nums.length == 0) return 0
    let s = new Set(nums)

    let max = 1

    for (let num of s) {
        if(!s.has(num-1)) {
            let nextNum = num + 1
            let currCount = 1
            while (s.has(nextNum)) {
                currCount++
                nextNum++
                max = Math.max(max, currCount)
            }
        }
    }

    return max
};