function deleteNode(root, x) {
    // code here
    return helper(root, x)
}

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