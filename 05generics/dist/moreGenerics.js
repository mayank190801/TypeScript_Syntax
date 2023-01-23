"use strict";
//making an generic function type which takes in array
function logIdentity(args) {
    return args;
}
//Array<Type> is also working --
function getSearchProducts(prod) {
    //do some operation
    const myIndex = 3;
    return prod[myIndex];
}
//how to convert above shit in arrow function???
//Generic arrow method be like this bad boi
const getMoreSearchProducts = (prod) => {
    //do some operation
    const myIndex = 4;
    return prod[myIndex];
};
//generics classes stuff - for sure brother - object!!
//some sort of databse should be there for usre
//very complex design aspect!!! - way complex
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
//Generic class bitch! -- simple idea bro
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
