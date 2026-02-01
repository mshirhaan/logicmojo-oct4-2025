let memo = {}

function targetSum(nums, target) {
    
    function helper(i, target) {
        if (target == 0) {
            return [[]]
        }
        if (i == nums.length || target < 0) return []

        if (memo[i + ',' + target] !== undefined) return memo[i + ',' + target]

        let left = helper(i + 1, target - nums[i])
        let right = helper(i + 1, target)

        let result = []
        for (let j = 0; j < left.length; j++) {
            result.push([nums[i], ...left[j]])
        }
        memo[i + ',' + target] = [...result, ...right]
        return memo[i + ',' + target]
    }

    return helper(0, target)
}

targetSum([1,2,3,4,5,6,1,2,3,1,2,3,1,2,3,1], 14)