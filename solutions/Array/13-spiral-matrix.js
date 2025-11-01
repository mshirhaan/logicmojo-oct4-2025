function spiralOrder(arr) {
    let left = 0, top = 0, bottom = arr.length - 1, right = arr[0].length - 1;
    let dir = 0;
    let op = []
    while (top <= bottom && left <= right) {
        if (dir == 0) {
            for (let i = left; i <= right; i++) {
                op.push(arr[top][i]);
            }
            top++;
        }
        if (dir == 1) {
            for (let i = top; i <= bottom; i++) {
                op.push(arr[i][right]);
            }
            right--;
        }
        if (dir == 2) {
            for (let i = right; i >= left; i--) {
                op.push(arr[bottom][i]);
            }
            bottom--;
        }
        if (dir == 3) {
            for (let i = bottom; i >= top; i--) {
                op.push(arr[i][left]);
            }
            left++;
        }
        dir = (dir + 1) % 4;
    }

    return op

}