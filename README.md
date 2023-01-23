//variable declaration
let varDeclare: string = "Mayank Singh";
//functions
function func(num: number = 123): number {
return 123;
}
//arrow function
const arrowFunc = (s: string): string => {
return "";
};
//void and never could be used as well
const oneMethArr: string[] = [];
const secMethArr: Array<number> = [];
//creating type
type typeExample = {
name: string;
isActive: boolean;
};
//return object from a function
function version1Obj(): { name: string } {
return { name: "mayank" };
}
//Just better version of above
function version2Obj(user: typeExample): typeExample {
return { name: "", isActive: false };
}
//some more options typescript provides
type moreOptions = {
readonly \_id: string; //no one can change it anymore
name: string;
creditCard?: number; //optional stuff, you want to add or not upto you
};
//& for combining types, now we have all the features plus some more
type combiningTypes = moreOptions & {
cvv: number;
name: string;
};
//can be number or string as per need
let twoPossibleOptions: number | string = 2323;
//use of typeof for primitives
//You can do it like this if you want, that's how union works!!
function selectiveTypesWorkflow(id: number | string) {
if (typeof id === "string") {
id.toLowerCase();
} else {
id = id + 2;
}
}
// const data: number[] | string[] = [1, 2, 3]; - all numbers or all strings error
const mulitpleArray: (string | number | boolean)[] = [1, "12123", true];
//one more dope use case for making enums!!
let onlyThisStuff: "aisle" | "middle" | "window";
//creating tuples
let tuplesEx: [string, number, boolean];
tuplesEx = ["hc", 123, true];
//you can always reopen an interface but not types
interface Person {
readonly dbID: number;
random: string;
googleId?: string;
getSalary: (s: number) => number; //arrow function
getCoupon(couponname: string): number; //normal function
}
//enums are also there
//Using and making classes - private, public, protected, readonly
//getters and setter are also there
//You can extends classes as well
class User {
//pre mention those variables, like we do in java
email: string;
private name: string;
readonly city: string = ""; //should be empty if not init
constructor(email: string, name: string) {
this.email = email;
this.name = name;
}
}
//You can implement more than one interface in a class
//Concept of abstract classes is also there, if you wanna check it bruh
//Generics baby
interface Bottle {
brand: string;
type: number;
}
function identityFour<T>(val: T): T {
return val;
}
identityFour<Bottle>({
brand: "Mayank",
type: 123,
});
//arrow function generic, really important
const getMoreSearchProducts = <T>(prod: T[]): T => {
//do some operation
const myIndex = 4;
return prod[myIndex];
};
