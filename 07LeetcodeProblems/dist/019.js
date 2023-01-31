"use strict";
function truncateSentence(s, k) {
    const arr = s.split(" ");
    arr.splice(k);
    return arr.join(" ");
}
console.log(truncateSentence("Hello how are you Contestant", 4));
