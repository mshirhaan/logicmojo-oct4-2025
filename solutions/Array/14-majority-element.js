//TC: O(n), SC: (n)

var majorityElement = function (nums) {
    let seat = nums[0]
    let count = 0

    for (let i = 1; i < nums.length; i++) {
        if (seat == nums[i]) {
            count++;
        } else {

            if (count > 0) {
                count--
            } else {
                seat = nums[i]
            }
        }
    }

    count = 0;
    for(let num of nums) {
      if(seat == num) {
        count++;
      }
    }

    if(count > nums.length/2) {
      return seat
    }

    return -1
};