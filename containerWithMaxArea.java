// TC: O(n)
// SC: O(1)
// Optimal approach
class Solution {
    public int maxArea(int[] height) {
        int i = 0;
        int j = height.length-1;
        int maxArea = 0;

        while(i<j) {
            int area = Math.min(height[i], height[j]) * (j-i); //width * height;
            maxArea = Math.max(maxArea, area);

            if(height[i]<height[j]) {
                i++;
            } else if(height[i]>height[j]) {
                j--;
            } else {
                i++;
                j--;
            }
        }
        return maxArea;
    }
}