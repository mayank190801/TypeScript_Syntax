"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
//also not working
function identityTwo(val) {
    return val;
}
//so cool bruh
function identityThree(val) {
    return val;
}
//you mention and use that type for sure -- how cool?
identityThree(3);
//normal function method for sure no?? -- kinda works for real
function identityFour(val) {
    return val;
}
//You can make interface and use it as a type
identityFour({
    brand: "Mayank",
    type: 123,
});
