class Solution {
    public int[] bellmanFord(int V, int[][] edges, int src) {
        // code here
        
        
        int[] dist = new int[V];
        
        for(int i = 0; i<V; i++) {
            dist[i] = 100000000;
        }
        dist[src] = 0;
        
        for(int i = 1; i<=V; i++) {
        
            for(int edge[]: edges) {
                int u = edge[0];
                int v = edge[1];
                int w = edge[2];
                
                //Check for distances and Update them
                if(dist[u] != 100000000 && dist[u] + w <dist[v]) {
                    if(i==V) {
                        return new int[]{-1};
                    }
                    dist[v] = dist[u] + w;
                }
            }
        }
        
        return dist;
    }
}