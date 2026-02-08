 function findTheCity(n, edges, distanceThreshold) {
        
        let dist = Array.from({ length: n }, () =>
            Array.from({ length: n }, () => Infinity)
        );


        for(let edge of edges) {
            let [from, to, weight] = edge

            dist[from][to] = weight
            dist[to][from] = weight
        }


        
        let nodes = dist.length;

        let map = {}
        
        for(let k=0; k<nodes; k++) {
            for(let i=0; i<nodes; i++) {
                let count = 0
                
                for(let j=0; j<nodes; j++){
                    if(j==i) continue
                    dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                    dist[j][i] = dist[i][j]
                    if(dist[i][j]<=distanceThreshold) {
                        count++
                    }
                }
                map[i] = count
            }
        }

        let ans = -1;

        for(let key in map) {
            if(map[ans]==undefined || (map[key]<=map[ans] && key > +ans)) {
                ans = +key
            }
        }
        return ans


    }