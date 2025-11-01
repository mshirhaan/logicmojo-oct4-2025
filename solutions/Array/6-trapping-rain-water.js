// TC: O(n)
// SC: O(n)
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