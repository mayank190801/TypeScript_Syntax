"use strict";
function minimumSum(num) {
    const arr = [];
    while (num != 0) {
        let temp = num % 10;
        arr.push(temp);
        num = num / 10;
        num = Math.trunc(num);
    }
    arr.sort((a, b) => a - b);
    console.log(arr);
    let one = arr[0] * 10 + arr[2];
    let two = arr[1] * 10 + arr[3];
    return one + two;
}
console.log(minimumSum(4009));
// let num = 2397;
// num = num / 10;
// console.log(Math.trunc(num));
