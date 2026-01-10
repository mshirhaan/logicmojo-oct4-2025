var cloneGraph = function(node) {
    if(!node) return null
    let map = new Map()

    function helper(node) {
        if(map.get(node)) {
            return map.get(node)
        }

        let cloneNode = new Node(node.val)
        map.set(node,cloneNode)
        for(let neighbor of node.neighbors) {
            cloneNode.neighbors.push(helper(neighbor))
        }
      return cloneNode
    }
    return helper(node)
};