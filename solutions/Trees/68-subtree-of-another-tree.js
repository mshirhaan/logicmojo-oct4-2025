class Solution {
    public boolean isSubtree(TreeNode root, TreeNode subRoot) {
        if(root == null){
            return false;
        }
    
        return isSameTree(root, subRoot) || isSubtree(root.right, subRoot) || isSubtree(root.left, subRoot);
    }


    public boolean isSameTree(TreeNode p, TreeNode q) {
        if(p == null && q == null)
            return true;
        else if(p==null)
            return false;
        else if(q==null)
            return false;
        return p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}