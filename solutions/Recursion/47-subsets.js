function subsets(nums) {
  let trolly = []
  helper(0, [], trolly);
  return trolly;

  function helper(i, bag, trolly) {
    if(i == nums.length) {
      trolly.push([...bag]);
      return
    }
    bag.push(nums[i])
    helper(i+1, bag, trolly);
    bag.pop()
    helper(i+1, bag, trolly);
  }
}