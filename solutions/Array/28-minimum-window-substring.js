var maxSlidingWindow = function(nums, k) {
    let queue = []
    let ans = []

    for(let i=0; i<k; i++) {
        while(queue.length && nums[i]>queue.at(-1)) {
            queue.pop()
        }
        queue.push(nums[i]);
    }
    ans.push(queue[0]);

    for(let i = k; i<nums.length; i++) {
        if(nums[i-k] == queue[0]) {
            queue.shift();
        }
        while(queue.length && nums[i]>queue.at(-1)) {
            queue.pop();
        }
        queue.push(nums[i]);
        ans.push(queue[0]);
    }
    return ans
};