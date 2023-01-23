"use strict";
//instance of
function logValue(x) {
    if (x instanceof Date) {
        return 123;
    }
    else {
        return 213123;
    }
}
function getResult(s) {
    if (s.kind === "user") {
        console.log(s.name);
    }
    else {
        console.log(s.age);
    }
}
//OR YOU CAN USE SWITCH STATEMENTS IN ABOVE WAY
function getMoreresult(s) {
    switch (s.kind) {
        case "user":
            console.log(s.name);
            break;
    }
}
