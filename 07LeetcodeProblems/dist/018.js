"use strict";
function largestLocal(grid) {
    //pretty simple and obvious basically --- let's figure it out
    const ans = [];
    //so basically
    let n = grid.length;
    let m = grid[0].length;
    for (let i = 0; i < n - 2; i++) {
        ans.push([]);
        for (let j = 0; j < m - 2; j++) {
            //minimum
            let min = 0;
            for (let k = i; k < i + 3; k++) {
                for (let l = j; l < j + 3; l++) {
                    min = Math.max(min, grid[k][l]);
                }
            }
            ans[i].push(min);
        }
    }
    return ans;
}
console.log(largestLocal([
    [9, 9, 8, 1],
    [5, 6, 2, 6],
    [8, 2, 6, 4],
    [6, 2, 2, 2],
]));
