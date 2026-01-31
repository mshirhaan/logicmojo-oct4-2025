//TC: O(2^n)
//SC: O(n)
function fib_recur(n) {
    if(n<2) return n;
    
    return fib(n-1) + fib(n-2)
}

//TC: O(n)
//SC: O(n) + O(n)[Stack Space with limit of ~10k]
//Top Down Approach
function fib_recur_memo(n, memo = []) {
    if(n<2) return n;
    if(memo[n]!==undefined) return memo[n]
    
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
}

//TC: O(n)
//SC: O(n)
//Bottom Up Approach
function fib_tab(n) {
    let table = [0, 1]

    for(let i = 2; i <= n; i++) {
        table[i] = table[i-1] + table[i-2]
    }
    return table[n]
}

//TC: O(n)
//SC: O(1)
//Space Optimised
function fib_space_optimised(n) {
    let f = 0
    let s = 1
    let c;

    for(let i = 2; i <= n; i++) {
        c = f + s
        f = s
        s = c
    }
    return c
} 
