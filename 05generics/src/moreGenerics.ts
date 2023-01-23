//making an generic function type which takes in array
function logIdentity<Type>(args: Type[]): Type[] {
  return args;
}

//Array<Type> is also working --
function getSearchProducts<T>(prod: T[]): T {
  //do some operation
  const myIndex = 3;
  return prod[myIndex];
}

//how to convert above shit in arrow function???
//Generic arrow method be like this bad boi
const getMoreSearchProducts = <T>(prod: T[]): T => {
  //do some operation
  const myIndex = 4;
  return prod[myIndex];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

//generics classes stuff - for sure brother - object!!
//some sort of databse should be there for usre
//very complex design aspect!!! - way complex
function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

// anotherFunction(3, "4");

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

//Generic class bitch! -- simple idea bro
class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
