var searchRange = function(nums, target) {
    let s = 0, e = nums.length-1
    let ans = [-1, -1]
    //first occ
    while(s<=e) {
        let mid = Math.floor((s+e)/2)
        if(nums[mid] == target && nums[mid-1] != target) {
            ans[0] = mid
            break
        } else if(nums[mid] < target) {
            s = mid+1
        } else if(nums[mid] > target || nums[mid] == target) {
            e = mid-1
        }
    }

    s = 0, e = nums.length-1
    

    //last occ
    while(s<=e) {
        let mid = Math.floor((s+e)/2)
        if(nums[mid] == target && nums[mid+1] != target) {
            ans[1] = mid
            break
        } else if(nums[mid] > target) {
            e = mid-1
        }
        else if(nums[mid] < target || nums[mid] == target) {
            s = mid+1
        }
    }

    return ans

};