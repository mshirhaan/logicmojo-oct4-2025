//TC: O(n)
//SC: O(n)
var trap = function (height) {
    let n = height.length

    let leftBiggestHeights = [0]

    let currentBiggestLeft = height[0];
    
    for(let i = 1; i< n; i++) {
      leftBiggestHeights[i] = currentBiggestLeft
      currentBiggestLeft = Math.max(currentBiggestLeft, height[i])
    }

    let rightBiggestHeights = []
    rightBiggestHeights[n-1] = 0;

    let currentBiggestRight = height[n-1];
    
    for(let i = n-2; i>=0; i--) {
      rightBiggestHeights[i] = currentBiggestRight
      currentBiggestRight = Math.max(currentBiggestRight, height[i])
    }

    let totalWater = 0;
    for (let i = 1; i < n-1; i++) {
        let temp = Math.min(leftBiggestHeights[i], rightBiggestHeights[i]) - height[i]
        if (temp > 0) {
            totalWater += temp;
        }
    }
    return totalWater
};



//Sahibs Approach
//TC: O(n)
//SC: O(1)
class Solution {
    public int trap(int[] height) {
        
        int left = 0;
        int right = height.length-1;
        
        int amount = 0;
        int leftMax = 0, rightMax = 0;
        
        while(left <= right){
            
            leftMax = Math.max(leftMax, height[left]);
            rightMax = Math.max(rightMax, height[right]);
            
            if(leftMax < rightMax){
                amount += leftMax - height[left];
                left++;
            } else{
                amount += rightMax - height[right];
                right--;
            }
        }
        return amount;
    }
}
