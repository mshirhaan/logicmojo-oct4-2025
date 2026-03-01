class Solution {
    search(needle, haystack) {
        if (needle.length > haystack.length) return [];

        let p = 7;
        let mod = 101;

        let size = needle.length;
        let ans = [];

        // precompute p^(size-1) % mod
        let pPower = 1;
        for (let i = 0; i < size - 1; i++) {
            pPower = (pPower * p) % mod;
        }

        // hash of needle
        let needleSum = 0;
        for (let i = 0; i < size; i++) {
            needleSum = (needleSum * p + (needle[i].charCodeAt(0) - 'a'.charCodeAt(0))) % mod;
        }

        // hash of first window in haystack
        let haystackSum = 0;
        for (let i = 0; i < size; i++) {
            haystackSum = (haystackSum * p + (haystack[i].charCodeAt(0) - 'a'.charCodeAt(0))) % mod;
        }

        // compare first window
        if (needleSum === haystackSum) {
            if (haystack.substring(0, size) === needle) {
                ans.push(0);
            }
        }

        // slide the window
        for (let i = size; i < haystack.length; i++) {
            // remove leftmost char, add new char
            haystackSum = (
                (haystackSum - ( (haystack[i - size].charCodeAt(0) - 'a'.charCodeAt(0)) * pPower ) % mod + mod) % mod
            );
            haystackSum = (haystackSum * p + (haystack[i].charCodeAt(0) - 'a'.charCodeAt(0))) % mod;

            if (haystackSum === needleSum) {
                if (haystack.substring(i - size + 1, i + 1) === needle) {
                    ans.push(i - size + 1);
                }
            }
        }

        return ans;
    }
}

// Example:
const sol = new Solution();
console.log(sol.search("abc", "abdabcbabc")); // should print [2, 6]