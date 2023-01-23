"use strict";
console.log("hello world");
console.log("hello world");
// class User {
//   //pre mention those variables, like we do in java
//   email: string;
//   private name: string;
//   readonly city: string = ""; //should be empty if not init
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// const hitesh = new User("random", "hiteh");
//pretty dope for sure, damn man, I am loving JS for sure
//Public private and protected -- simple stuff
//We have to mark private explicity
//some production level shit bruh
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        //pre mention those variables, like we do in java
        this.city = ""; //should be empty if not init
    }
}
