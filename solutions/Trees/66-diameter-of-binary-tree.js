var diameterOfBinaryTree = function(root) {
    return Math.max(...helper(root))

    // returns [leftVal, rightVal] left is max of either side, right is including root
    function helper(node) {
        if(!node.left && !node.right) {
            return [0,0]
        }
        if(!node.left) {
            let ans = helper(node.right)
            return [1+ans[0],ans[1]]
        }
        if(!node.right) {
            let ans = helper(node.left)
            return [1+ans[0],ans[1]]
        }
        let ansLeft = helper(node.left)
        let ansRight = helper(node.right)
        return   [1 + Math.max(ansLeft[0], ansRight[0]), 
        Math.max(1+ansLeft[0]+1+ansRight[0],ansLeft[1], ansRight[1])]
    }
};


//Alternative using global variable
var diameterOfBinaryTree = function(root) {
    let max = 0;

    function diameterHelper(node) {
        if (!node) return 0;

        let left = diameterHelper(node.left);
        let right = diameterHelper(node.right);

        // update diameter
        max = Math.max(max, left + right);

        // return height
        return Math.max(left, right) + 1;
    }

    diameterHelper(root);
    return max;
};