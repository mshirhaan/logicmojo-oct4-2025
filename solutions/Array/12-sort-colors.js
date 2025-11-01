var sortColors = function (nums) {
    let mid = 0;
    let high = nums.length - 1;
    let low = 0;

    while (mid <= high) {
        if (nums[mid] == 0) {
            let temp = nums[mid];
            nums[mid] = nums[low];
            nums[low] = temp;
            low++;
            mid++;
        }
        else if (nums[mid] == 1) {
            mid++;
        }
        else if (nums[mid] == 2) {
            let temp = nums[mid];
            nums[mid] = nums[high];
            nums[high] = temp;
            high--;
        }
    }
};