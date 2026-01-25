function findWords(board, words) {
    let t = new Trie();
    for(let word of words) {
        t.insert(word)
    }
    let res = new Set()

    let visited = new Set()
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            
            dfs(board, t.root, i, j, visited, res, "");
        }
    }

    return [...res];
}

function dfs(board, curr, i, j, visited, res, currWord) {
    if (visited.has(i+','+j)) {
        return;
    }
    
    let index = board[i][j].charCodeAt(0) - 97;
    if (curr.bucket[index] == null) {
        return;
    }
    visited.add(i+','+j)
    currWord+=board[i][j]
    
    curr = curr.bucket[index];
    if(curr.isWord) {
        res.add(currWord)
    }

    let directions = [
        [0, 1],
        [0, -1],
        [-1, 0],
        [1, 0],
    ];

    for (let it = 0; it < directions.length; it++) {
        

        let nextI = i + directions[it][0];;
        let nextJ = j + directions[it][1];

        if (nextI < 0 || nextI >= board.length || nextJ < 0 || nextJ >= board[0].length) {
            continue;
        }

        dfs(board, curr, nextI, nextJ, visited, res, currWord);
    }
    visited.delete(i+','+j)
}

class Node {
    bucket = []
    isWord = false;
}

class Trie {
    root = null;

    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 97;
            if (curr.bucket[index] == null) {
                curr.bucket[index] = new Node();
            }
            curr = curr.bucket[index];
        }
        curr.isWord = true;
    }
}


findWords([["b"],["a"],["b"],["b"],["a"]], ["baa","abba","baab","aba"])