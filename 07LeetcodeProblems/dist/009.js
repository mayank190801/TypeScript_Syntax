"use strict";
// function mostWordsFound(sentences: string[]): number {
//   let ans = 0;
//   sentences.forEach((str) => {
//     let cnt = 1;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === " ") cnt++;
//     }
//     ans = Math.max(ans, cnt);
//   });
//   return ans;
// }
//this above could be solved in one liner as well - but is that more important, or able to code something right now
function mostWordsFound(sentences) {
    return sentences.reduce((acc, curr) => {
        return curr.split(" ").length > acc ? curr.split(" ").length : acc;
    }, 0);
}
console.log(mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
]));
