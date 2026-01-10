/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let queue = []
    let rowLimit = grid.length-1
    let colLimit = grid[0].length-1

    for(let i = 0; i<grid.length; i++) {
        for(let j = 0; j<grid[0].length; j++) {
            if(grid[i][j] == 2) {
                queue.push([i,j])
            }
        }
    }

    let timer = 0
    while(queue.length) {
        let levelSize = queue.length
        let flag = false
        while(levelSize--) {
            let [currI, currJ] = queue.shift()
            for(let [dirI, dirJ] of [[0,1],[0,-1],[1,0],[-1,0]]) {
                let nextI = currI+dirI
                let nextJ = currJ+dirJ

                if(nextI<0 || nextI >rowLimit || nextJ<0 || nextJ>colLimit || grid[nextI][nextJ] == 2 || grid[nextI][nextJ] == 0) {
                    continue
                }
                flag = true
                grid[nextI][nextJ] = 2
                queue.push([nextI, nextJ])
            }
        }
        if(flag)
            timer++
    }

    for(let i = 0; i<grid.length; i++) {
        for(let j = 0; j<grid[0].length; j++) {
            if(grid[i][j] == 1) {
                return -1
            }
        }
    }
    return timer
};