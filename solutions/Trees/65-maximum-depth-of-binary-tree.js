class Solution {
    public int maxDepth(TreeNode root) {
        return helper(root);
    }

    public int helper(TreeNode root) {
        if(root == null) {
            return 0;
        }
        return 1 + Math.max(helper(root.left) , helper(root.right));
    }
}