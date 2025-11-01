// class Solution {
//     public int missingNumber(int[] nums) {
//         int n = nums.length;
//         int sum = 0;

//         for(int num : nums) {
//             sum+= num;
//         }
//         int expected = (n*(n+1))/2;

//         return expected - sum;

//     }
// }

// class Solution {
//     public int missingNumber(int[] nums) {
//         boolean trackingArray[] = new boolean[nums.length+1];
//         for(int i: nums) {
//             trackingArray[i] = true;
//         }
//         for(int i=0;i<trackingArray.length;i++){
//             if(!trackingArray[i]){
//                 return i;
//             }
//         }
//         return 0;
//     }
// }

class Solution {
    public int missingNumber(int[] nums) {
        int xor = 0;
        for(int num : nums) {
            xor^=num;
        }

        for(int i = 0; i<=nums.length; i++) {
            xor^=i;
        }

        return xor;
    }
}