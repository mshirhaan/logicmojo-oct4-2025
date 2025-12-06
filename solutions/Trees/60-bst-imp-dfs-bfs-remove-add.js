class Node {
  left = null
  right = null
  
  constructor(val) {
    this.val = val
    this.count = 1
  }
}

class BST {
  root = null

  insert(val) {
    let node = new Node(val);
    if(this.root == null) {
      this.root = node
      return
    }
    let curr = this.root
    while(curr) {
      if(val == curr.val) {
        curr.count++
        return
      }
      else if(val < curr.val) {
        if(curr.left == null) {
          curr.left = node
          return
        }
        curr = curr.left
      } else {
        if(curr.right == null) {
          curr.right = node
          return
        }
        curr = curr.right
      }
    }
  }

remove(val) {
    return helper(this.root, val)

    function helper(node, x) {
      if(!node) return null
      
      if (node.val == x) {
          // if no child, parent gets a null
          if (node.left == null && node.right == null) {
              return null
          }
          //if one child, parent gets that child
          if (node.left == null) {
              return node.right
          }
          else if (node.right == null) {
              return node.left
          }
          attachRightmostBottom(node.left, node.right);
          return node.left

      }
      if (x < node.val) {
          node.left = helper(node.left, x)
      } else {
          node.right = helper(node.right, x)
      }
      return node
  }
  function attachRightmostBottom(parent, node) {
      if (parent.right == null) {
          parent.right = node
          return;
      }
      attachRightmostBottom(parent.right, node)
  }
}

  search () {

  }
}

let bst = new BST() 
bst.insert(5)




