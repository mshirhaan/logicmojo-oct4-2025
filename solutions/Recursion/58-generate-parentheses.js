var generateParenthesis = function(n) {
    let res = []
    helper(0, 0, "", res);
    return res;

    function helper(open, close, bag) {
        if(close == n) {
            res.push(bag);
            return;
        }

        if(open > close) {
            helper(open, close+1, bag+")");
        }
        if(open<n)
            helper(open+1, close, bag+"(");
    }
};