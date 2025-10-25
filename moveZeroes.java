class Solution {
    public void moveZeroes(int[] nums) {
        int i = -1;
        int j = 0;

        while(j < nums.length) {
            if(nums[j] != 0) {
                i++;
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
            j++;
        }
    }
}
