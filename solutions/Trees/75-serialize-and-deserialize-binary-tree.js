/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let serialized = []

    function dfs(node) {
        if(!node) {
            serialized.push(null);
            return
        }
        serialized.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return serialized
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
 // 1 2 n n 3 4 n n 5 n n
var deserialize = function(data) {
    let i = 0;
    function dfs() {
        if(data[i] == null) {
            i++;
            return null;
        }
        let node = new TreeNode(data[i])
        i++;
        node.left = dfs()
        node.right = dfs()

        return node;
    }

    return dfs()
};