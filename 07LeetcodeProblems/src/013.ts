function countDigits(num: number): number {
  //number of digits present inside which can divide this piece of shit
  let ans = 0;
  let number = num;

  //Some math function is used for that tho!!
  //let's figure something else out
  String(num)
    .split("")
    .forEach((str: string) => {
      let temp = Number(str);
      if (num % temp === 0) ans++;
    });

  return ans;
}

console.log(countDigits(1248));
