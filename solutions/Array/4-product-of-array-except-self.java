// TC: O(n)
// SC: O(n)
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int left[] = new int[n];

        int right[] = new int[n];

        int carry = 1;

        for(int i = 0; i<n; i++) {
            left[i] = carry;
            carry = carry*nums[i];
        }

        carry = 1;

        for(int i = n-1; i>=0; i--) {
            right[i] = carry;
            carry = carry*nums[i];
        }

        int result[] = new int[n];

        for(int i = 0; i<n; i++) {
            result[i] = left[i] * right[i];
        }

        return result;
    }
}

// TC: O(n)
// SC: O(1)
// Optimal approach
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int result[] = new int[n];

        int carry = 1;

        for(int i = 0; i<n; i++) {
            result[i] = carry;
            carry*= nums[i];
        }

        carry = 1;

        for(int i = n-1; i>=0; i--) {
            result[i]*= carry;
            carry*= nums[i];
        }
        return result;
    }
}