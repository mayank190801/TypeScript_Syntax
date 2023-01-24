function buildArray(nums: number[]): number[] {
  //so basically make an array first
  let ans: number[] = [];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    ans.push(nums[nums[i]]);
  }
  return ans;
}

console.log(buildArray([0, 2, 1, 5, 3, 4]));
