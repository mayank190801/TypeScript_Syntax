//Multiple solutions are there

// --- hashmap ---
// --- int[] arr ---

function arithmeticTriplets(nums: number[], diff: number): number {
  //this is an extremely poor solution for sure
  let ans = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[j] - nums[i] === diff && nums[k] - nums[j] === diff) {
          console.log(i, j, k);
          ans++;
        }
      }
    }
  }

  return ans;
}

console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3));
