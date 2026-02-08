class Solution {

    floydWarshall(dist) {
        // Code here
        
        let nodes = dist.length;
        
        for(let k=0; k<nodes; k++) {
            for(let i=0; i<nodes; i++) {
                for(let j=0; j<nodes; j++){
                    if(dist[i][k] == 100000000 || dist[k][j] == 100000000) continue
                    
                    dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                }
            }
        }
    }
}