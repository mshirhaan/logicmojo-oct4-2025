class Node {
  constructor(val) {
    this.val = val
    this.neighbors = new Map() // Map<Node, weight>
  }

  addConnection(node, weight) {
    this.neighbors.set(node, weight)
    node.neighbors.set(this, weight)
  }
}

// Nodes
const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')
const g = new Node('g')
const h = new Node('h')
const i = new Node('i')
const j = new Node('j')
const k = new Node('k')
const l = new Node('l')
const m = new Node('m')

// Connections
a.addConnection(b, 0)
a.addConnection(c, 0)
a.addConnection(d, 0)
a.addConnection(e, 0)

b.addConnection(f, 0)
b.addConnection(g, 0)

c.addConnection(h, 0)
c.addConnection(i, 0)

d.addConnection(m, 0)
d.addConnection(l, 0)

e.addConnection(j, 0)
e.addConnection(k, 0)



function bfs(node) {
  let queue = [node]
  let visited = new Set([node])

  let ans = []
  while(queue.length) {
    let level = []
    let levelSize = queue.length
    while(levelSize--) {
      let node = queue.shift()
      level.push(node.val)
      for(let neighborNode of node.neighbors.keys()){
        if(visited.has(neighborNode)) continue
        queue.push(neighborNode);
        visited.add(neighborNode)
      }
    }
    ans.push(level)
  }
  console.log(ans)
}

function dfs(node) {
  helper(node, new Set())

  function helper(node, visited) {
      visited.add(node.val)
      console.log(node.val)
      for(let neighborNode of node.neighbors.keys()){
        if(visited.has(neighborNode.val)) continue
        helper(neighborNode, visited);
        visited.add(neighborNode)
      }
  }
}

dfs(c)
