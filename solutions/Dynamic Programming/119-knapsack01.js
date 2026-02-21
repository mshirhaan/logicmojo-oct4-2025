class Solution {
    knapsack(W, val, wt) {
        // code here
        let memo = new Array(W) 
        
        for(let i = 0; i<=W;i++) {
            memo[i] = new Array(val.length)
        }
        return helper(W, 0, memo)
        
        
        function helper(W, i, memo) {
            if(i == val.length || W == 0) {
                return 0
            }
            
            if( memo[W][i] != undefined) {
                return  memo[W][i]
            }
            
            let rob = 0
            if(W>=wt[i]) {
                rob = val[i] + helper(W-wt[i], i+1,memo)
            }
            let dontRob = helper(W, i+1, memo)
            
            memo[W][i] = Math.max(rob, dontRob)
            return  memo[W][i]
        }
    }
}


class Solution {
    knapsack(W, val, wt) {
        let table = new Array(val.length) 
        for(let i = 0;i<table.length; i++) {
            table[i] = new Array(W+1)
        }
        
        for(let i = 0;i<table.length; i++) {
            table[i][0] = 0   
        }
        
        for(let j = 1; j<=W; j++) {
            table[val.length-1][j] = j>=wt[val.length-1] ? val[val.length-1]:0
        }
        
        for(let i = val.length-2; i>=0; i--) {
            for(let j = 1; j<=W; j++) {
                let rob = 0;
                if(j>=wt[i]) { 
                    rob = val[i] + table[i+1][j-wt[i]] 
                }
                let dontRob = table[i+1][j] 
                table[i][j] = Math.max(rob, dontRob)
            }
        }
        return table[0][W];
    }
}