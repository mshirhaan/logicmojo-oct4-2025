class Solution {
    topView(root) {
        // code here
        let map = new Map()
        
        let queue = [{node: root, pos: 0}]
        let ans = []
        
        let n = 0
        
        while(queue.length) {
            let {node, pos} = queue.shift()
            n++
            if(!map.has(pos)) {
                map.set(pos, node.data)
            }
            
            if(node.left) {
                queue.push({node: node.left, pos: pos-1})
            }
            if(node.right) {
                queue.push({node: node.right, pos: pos+1})
            }
        }
        for(let i = -n; i<=n; i++) {
            if(map.has(i)) {
                ans.push(map.get(i))
            }
        }
        return ans
    }
}