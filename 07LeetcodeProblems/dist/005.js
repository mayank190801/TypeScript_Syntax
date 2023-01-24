"use strict";
function finalValueAfterOperations(operations) {
    //I have to return the final number
    let ans = 0;
    operations.forEach((str) => {
        if (str[0] === "+" || str[2] === "+")
            ans++;
        else
            ans--;
    });
    return ans;
}
console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
