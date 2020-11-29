/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // the queue
    let count = 0;
    // let pixel = {x: 0, y: 0};
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                // start bfs
                _bfs(grid, i, j);
                count++;
            }
        }
    }
    return count;
};

function _bfs(grid, i, j) {
    let qa = []
    qa.push({x: i, y:j});
    while (qa.length > 0) {
        let cur = qa.pop();
        grid[cur.x][cur.y] = 0;
        if (cur.x - 1 >= 0 && grid[cur.x - 1][cur.y] === '1') {
            if (grid) qa.push({x: cur.x - 1, y: cur.y});
        } 
        if (cur.y - 1 >= 0 && grid[cur.x][cur.y - 1] === '1') {
            qa.push({x: cur.x, y: cur.y - 1});
        }
        if (cur.x + 1 < grid.length && grid[cur.x + 1][cur.y] === '1') {
            qa.push({x: cur.x + 1, y: cur.y});
        } 
        if (cur.y + 1 < grid[cur.x].length && grid[cur.x][cur.y + 1] === '1') {
            qa.push({x: cur.x, y: cur.y + 1});
        }
    }
}