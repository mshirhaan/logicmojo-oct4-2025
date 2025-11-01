// TC: O(n)
// SC: O(n)
// Illegal but just for learning purpose
var removeDuplicates = function(nums) {
    let s = new Set(nums)

    let i = 0;
    for(let num of s) {
        nums[i] = num;
        i++
    }
    return s.size
};

// TC: O(n)
// SC: O(1)
// Optimal approach
var removeDuplicates = function(nums) {
    let i = 0;
    let j = 1;
    while(j < nums.length) {
        if(nums[i] != nums[j]) {
            i++;
            if(i!=j) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
        j++;
    }
    return i+1;
};