"use strict";
function deleteGreatestValue(grid) {
    //so basically sort them somehow now?
    //how to sort 2D array in this shit
    let n = grid.length;
    let m = grid[0].length;
    for (let i = 0; i < n; i++) {
        grid[i].sort((a, b) => {
            return a - b;
        });
    }
    let ans = 0;
    for (let j = 0; j < m; j++) {
        let cmax = 1;
        for (let i = 0; i < n; i++) {
            cmax = Math.max(cmax, grid[i][j]);
        }
        ans += cmax;
    }
    return ans;
}
console.log(deleteGreatestValue([
    [1, 2, 4],
    [3, 3, 1],
]));
