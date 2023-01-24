function getConcatenation(nums: number[]): number[] {
  //so i have to return an array basically
  const len = nums.length;
  let ans: number[] = [];
  for (let i = 0; i < 2 * len; i++) {
    ans.push(nums[i % len]);
  }
  return ans;
}

console.log(getConcatenation([1, 2, 1]));
