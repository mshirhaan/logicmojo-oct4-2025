// by reversing
function zigzagLevelOrder(root) {
    if(!root) return []
    let queue = [root]
    let ans = []

    while(queue.length) {
        let levelSnapshot = queue.length
        let level = []
        while(levelSnapshot--) {
            let node = queue.shift();
            level.push(node.val)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        ans.push(level)
    }

    let flag = false;

    for(let i = 0; i<ans.length; i++) {
        if(flag) {
            ans[i]= ans[i].toReversed();
        }
        flag = !flag;
    }
    
    return ans;
} 


// without reverse using deqeue
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    let queue = [root];
    let result = [];
    
    let direction = false;
    
    while(queue.length) {
        direction = !direction;
        let temp = [];
        let levelLength = queue.length;
        for(let i = 0; i < levelLength; i++) {
            let node = queue.shift();
            if(direction) {
                temp.push(node.val);
            } else {
                temp.unshift(node.val);
            }
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        result.push(temp);
    }
    return result;
};


