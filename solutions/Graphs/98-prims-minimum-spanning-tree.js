class Solution {
    public int spanningTree(int V, int[][] edges) {
        // code here
        int[][] adjMatrix = new int[V][V];
        Set<Integer> visited = new HashSet<>();
        int cost = 0;
        for(int[] row : adjMatrix){
            Arrays.fill(row,-1);
        }
        for(int[] edge : edges){
            int u = edge[0];
            int v = edge[1];
            int w = edge[2];
            adjMatrix[u][v] = w;
            adjMatrix[v][u] = w;
        }
        PriorityQueue<Entry> minHeap = new PriorityQueue<>((a,b) -> Integer.compare(a.distance,b.distance));
        for(int i=0;i<V;i++){
            if(adjMatrix[0][i] != -1){
                Entry entry = new Entry(0,i,adjMatrix[0][i]);
                minHeap.add(entry);
            }
        }
        visited.add(0);
        while(!minHeap.isEmpty()){
            Entry curr = minHeap.poll();
            if(!visited.contains(curr.to)){
                visited.add(curr.to);
                cost += curr.distance;
                for(int i=0;i<V;i++){
                    if(adjMatrix[curr.to][i] != -1 && !visited.contains(i)){
                        Entry entry = new Entry(curr.to,i,adjMatrix[curr.to][i]);
                        minHeap.add(entry);
                    }
                }
            }
            
        }
        return cost;
    }
    class Entry{
        int from;
        int to;
        int distance;
        
        Entry(int from,int to,int distance){
            this.from = from;
            this.to = to;
            this.distance = distance;
        }
    }
}
