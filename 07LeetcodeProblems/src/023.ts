//by my perspecive pretty decent code --
//but could use multiple features of js and ts to make it even better someday

function sortPeople(names: string[], heights: number[]): string[] {
  const temp: (string | number)[][] = []; //this kinda works tho - pretty slick yeah
  for (let i = 0; i < names.length; i++) {
    temp.push([]);
    temp[i].push(names[i]);
    temp[i].push(heights[i]);
  }

  temp.sort((a, b) => {
    return Number(b[1]) - Number(a[1]);
  });

  const ans: string[] = [];
  for (let i = 0; i < names.length; i++) {
    ans.push(String(temp[0]));
  }
  return ans;
}

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
