function sortSentence(s: string): string {
  const str: string[] = s.split(" ");
  str.sort((a, b) => {
    return Number(a[a.length - 1]) - Number(b[b.length - 1]);
  });

  let ans = "";
  for (let i = 0; i < str.length; i++) {
    ans = ans + str[i].slice(0, str[i].length - 1) + " ";
  }
  return ans.slice(0, ans.length - 1);
}

console.log(sortSentence("is2 sentence4 This1 a3"));
