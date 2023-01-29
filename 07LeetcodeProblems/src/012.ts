//row is given by number --
//col is given by column --
function cellsInRange(s: string): string[] {
  const ans: string[] = [];

  const rowOneOriginal = Number(s[1]);
  let rowOne = Number(s[1]);
  let rowTwo = Number(s[4]);

  let startStr = s[0];
  let endStr = s[3];

  while (startStr.charCodeAt(0) <= endStr.charCodeAt(0)) {
    while (rowOne <= rowTwo) {
      const tans = startStr + String(rowOne);
      ans.push(tans);
      rowOne++;
    }
    rowOne = rowOneOriginal;
    startStr = String.fromCharCode(startStr.charCodeAt(0) + 1);
  }

  return ans;
}

console.log(cellsInRange("U7:X9"));
