function levelOrder(root) {
    if(!root) return []
    let queue = [root]

    let res = []

    while(queue.length) {
        let levelSize = queue.length
        let level = []
        while(levelSize>0) {
            let curr = queue.shift()
            level.push(curr.val)
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
            levelSize--
        }
        res.push(level)
    }
    return res
}