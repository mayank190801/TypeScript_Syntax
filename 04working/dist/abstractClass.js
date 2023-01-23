"use strict";
//interfact implemented by the class
//almost like blueprint
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    random() {
        console.log("this bad boi works");
    }
}
// const ms = new TakePhoto("random", "damn");
class SnapChat extends TakePhoto {
    //weird syntax for sure, bruh
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("wonders bitch");
    }
}
const hc = new SnapChat("Random", "gamer", "random");
