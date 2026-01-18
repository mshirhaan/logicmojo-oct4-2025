class Solution {
    public int[] dijkstra(int V, int[][] edges, int src) {

        // 1. Build adjacency list
        List<List<int[]>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }

        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            int w = edge[2];

            adj.get(u).add(new int[]{v, w});
            adj.get(v).add(new int[]{u, w});
        }

        // 2. Min-heap: {distance, node, via}
        PriorityQueue<int[]> pq = new PriorityQueue<>(
            (a, b) -> Integer.compare(a[0], b[0])
        );

        Entry[] distanceTable = new Entry[V];
        for (int i = 0; i < V; i++) {
            distanceTable[i] = new Entry(-1, Integer.MAX_VALUE);
        }

        pq.offer(new int[]{0, src, -1});

        // 3. Dijkstra
        while (!pq.isEmpty()) {
            int[] cur = pq.poll();
            int dist = cur[0];
            int node = cur[1];
            int via = cur[2];

            if (dist >= distanceTable[node].dist) continue;

            distanceTable[node] = new Entry(via, dist);

            for (int[] neigh : adj.get(node)) {
                int nextNode = neigh[0];
                int weight = neigh[1];

                pq.offer(new int[]{dist + weight, nextNode, node});
            }
        }

        // 4. Result
        int[] ans = new int[V];
        for (int i = 0; i < V; i++) {
            ans[i] = distanceTable[i].dist;
        }

        return ans;
    }

    class Entry {
        int via;
        int dist;

        Entry(int via, int dist) {
            this.via = via;
            this.dist = dist;
        }
    }
}