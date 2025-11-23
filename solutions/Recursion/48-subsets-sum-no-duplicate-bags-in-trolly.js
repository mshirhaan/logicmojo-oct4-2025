function subsetsWithDup(nums) {
    nums = nums.sort((a,b)=>a-b)
  let trolly = [[]]
  helper(0, [], trolly, nums)
  return trolly
}

function helper(index, bag , trolly, nums) {
  for(let i = index; i<nums.length; i++) {
    if(i!=index && nums[i] == nums[i-1]) {
      continue;
    }
    bag.push(nums[i])
    trolly.push([...bag])
    helper(i+1, bag, trolly, nums)
    bag.pop();
  }
}

subsetsWithDup([1,2,2])