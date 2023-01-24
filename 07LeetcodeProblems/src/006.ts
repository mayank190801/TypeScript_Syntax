function maximumWealth(accounts: number[][]): number {
  let max = 0;

  let n = accounts.length;
  let m = accounts[0].length;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < m; j++) {
      sum += accounts[i][j];
    }
    max = Math.max(max, sum);
  }

  return max;
}

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
