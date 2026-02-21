class Solution {
    fractionalKnapsack(val, wt, capacity) {
        // code here
        let items = []
        
        for(let i = 0; i<val.length; i++) {
            items.push({val:val[i], wt: wt[i]})
        }
        items.sort((a,b)=>(b.val/b.wt) - (a.val/a.wt))
        
        let profit = 0
        
        for(let item of items) {
            let howMuchCanBeRobbed = Math.min(item.wt, capacity)
            
            profit+= (item.val/item.wt) * howMuchCanBeRobbed
            
            capacity-= howMuchCanBeRobbed 
        }
        return profit
    }
}