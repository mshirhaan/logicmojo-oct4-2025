// User function Template for Java
class Solution {
    static int kruskalsMST(int V, int[][] edges) {
        // code here
        int[] parent = new int[V];
        int[] rank = new int[V];
        
        for(int i=0; i<V; i++){
            parent[i] = i;
        }
        Arrays.sort(edges, Comparator.comparingInt(e -> e[2]));
        
        int mstWeight = 0;
        for(int[] edge: edges){
            int u = edge[0];
            int v = edge[1];
            int w = edge[2];
            int p1 = find(u, parent);
            int p2 = find(v, parent);
            if(p1 == p2) continue;
            mstWeight+=w;
            if(rank[p1] > rank[p2]){
                parent[p2] = p1;
            }else if(rank[p2] > rank[p1]){
                parent[p1] = p2;
            }else{
                parent[p2] = p1;
                rank[p1]++;
            } 
        }
        
        return mstWeight;
    }
    
    public static int find(int i, int[] parent){
        if(parent[i] == i){
            return i;
        }else{
            return find(parent[i], parent);
        }
    }
}