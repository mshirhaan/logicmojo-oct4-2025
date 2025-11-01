TC: O(N), SC: O(1)
var rotate = function(nums, k) {

    if(nums.length == 1) return  

    k = k % nums.length;

    let n = nums.length;
    reverse(nums, 0, n-1)

    reverse(nums, 0, k-1)

    reverse(nums,k, n-1)

};

function reverse(nums, start, end) {
    while(start<end) {
        let temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp

        start++;
        end--;
    }
}