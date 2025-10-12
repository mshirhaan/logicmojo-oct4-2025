// Naive approach
// Time complexity: O(n^2)
// Space complexity: O(1)
class Solution {
    public int[] twoSum(int[] nums, int target) {
        for(int i = 0; i<nums.length-1; i++) {
            int need = target-nums[i];
            for(int j = i+1; j<nums.length; j++) {
                if(nums[j] == need) {
                    return new int[]{i, j};
                }
            }
        }
        return null;
    }
}

// Hashmap approach
// Time complexity: O(n)
// Space complexity: O(n)
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i<nums.length; i++) {
            int need = target-nums[i];
            if(map.containsKey(need)) {
                return new int[]{i, map.get(need)};
            }
            map.put(nums[i], i);
        }
        return null;
    }
}