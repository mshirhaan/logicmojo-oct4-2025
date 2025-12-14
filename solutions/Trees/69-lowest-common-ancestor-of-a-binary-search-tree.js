var lowestCommonAncestor = function(root, p, q) {
    function helper(root, p, q) {
        
        if(p.val < root.val && q.val < root.val) {
            return helper(root.left, p, q)
        }
        if(p.val > root.val && q.val > root.val) {
            return helper(root.right, p, q)
        }
        
        return root
    }

    return helper(root, p, q)
};