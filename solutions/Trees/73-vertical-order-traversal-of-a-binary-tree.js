/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class NodePosition {
    TreeNode node;
    int x;
    int y;
    
    NodePosition(TreeNode node, int x, int y) {
        this.node = node;
        this.x = x;
        this.y = y;
    }
}

public class Solution {
    public List<List<Integer>> verticalTraversal(TreeNode root) {
        if (root == null) return new ArrayList<>();

        Queue<NodePosition> queue = new LinkedList<>();
        queue.offer(new NodePosition(root, 0, 0));

        Map<Integer, List<NodePosition>> map = new HashMap<>();
        int nodeCount = 0;

        while (!queue.isEmpty()) {
            NodePosition np = queue.poll();
            TreeNode node = np.node;
            int x = np.x;
            int y = np.y;

            nodeCount++;
            map.putIfAbsent(x, new ArrayList<>());
            List<NodePosition> list = map.get(x);
            list.add(new NodePosition(node, x, y));
            

            if (node.left != null) {
                queue.offer(new NodePosition(node.left, x - 1, y+1));
            }

            if (node.right != null) {
                queue.offer(new NodePosition(node.right, x + 1, y+1));
            }
        }

        List<List<Integer>> result = new ArrayList<>();
        for (int i = -nodeCount; i <= nodeCount; i++) {
            if (map.containsKey(i)) {
                List<Integer> list = new ArrayList<>();
                List<NodePosition> list1 = map.get(i);
                list1.sort((a, b) -> {
                    if (a.y != b.y) {
                        return Integer.compare(a.y, b.y);
                    } else {
                        return Integer.compare(a.node.val, b.node.val);
                    }
                });
                for (NodePosition np : list1) {
                    list.add(np.node.val);
                }
                result.add(list);
            }
        }

        return result;
    }
}