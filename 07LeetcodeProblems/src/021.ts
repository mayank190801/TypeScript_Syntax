function countAsterisks(s: string): number {
  //let's figure this out now?? no-- let's get on with this stuff bruh ---
  const arr = s.split("|");
  let ans = 0;

  for (let i = 0; i < arr.length; i += 2) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "*") ans++;
    }
  }

  return ans;
}

console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l"));
