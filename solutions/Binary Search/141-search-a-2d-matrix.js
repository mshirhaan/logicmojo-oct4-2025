class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {

        int rows = matrix.length;
        int columns = matrix[0].length;
        int start = 0, end = rows * columns - 1;

        while (start <= end) {
            int mid = (start + end) / 2;
            int row = mid / columns;
            int column = mid % columns;
            int midEle = matrix[row][column];
            if (midEle == target)
                return true;
            if (midEle < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return false;
    }
}



// or

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    

    let m = matrix.length-1
    let n = matrix[0].length-1

    let startRow = 0
    let endRow = m;

    while(startRow<=endRow) {
        let midRow = Math.floor((startRow+endRow)/2)

        if(target >= matrix[midRow][0] && target <= matrix[midRow][n]) {
            let startCol = 0
            let endCol = n;
            while(startCol<=endCol) {
                let midCol = Math.floor((startCol+endCol)/2)
                if(target == matrix[midRow][midCol]) {
                    return true;
                } else if(target > matrix[midRow][midCol]) {
                    startCol = midCol+1;
                } else {
                    endCol = midCol-1;
                }
            }
            return false;
        } else if(target < matrix[midRow][0]) {
            endRow = midRow - 1;
        } else {
            startRow = midRow + 1;
        }
    }
    return false;
};