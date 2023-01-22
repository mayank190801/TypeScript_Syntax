"use strict";
exports.__esModule = true;
var User = {
    name: "mayank",
    email: "hitesh",
    isActive: true
};
//basic way of doing stuff
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
    console.log("hey");
}
createUser({ name: "hitesh", isPaid: false });
//return object from a function
function createCourse() {
    return { name: "mayank" };
}
// type Mystring = string  //stupid shit - technically allowed tho
//kind of making dataTypes in here
function createUser2(user) {
    return { name: "", email: "", isActive: false };
}
createUser2({ name: "", email: "", isActive: false });
var myUser1 = {
    _id: "123",
    name: "mayank",
    email: "hahah@gmail.com",
    isActive: false
};
myUser1.email = "random@gmail.com";
