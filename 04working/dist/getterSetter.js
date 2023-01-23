"use strict";
//what is the command for
console.log("hey there");
console.log("this works");
//Pretty amazing stuff for sure
//Some interesting things bruh!
class Game {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this._randomCount = 1;
        this.city = "Jaipur"; //should be empty if not init
    }
    //this function is only accessible within class
    deleteToken() {
        console.log("make shit happen");
    }
    //getter function
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
//That's all
//protected keyword now!! - simple accessible within classes, but not outside classes
//can not aquire private!!
class SubUser extends Game {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._randomCount = 4;
    }
}
