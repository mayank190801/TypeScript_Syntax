function addTwo(num: number): number {
  return 123;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

// getUpper(4);  -- this gives error message, hence typescript feature

function signUpUser(name: string, email: string, isPaid: boolean) {}

// signUpUser(1,2,3) - errors if any
// signUpUser("mayank", "12231", 213); gives specific erros

//but what about defaut values??
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

//Now you should be worried about more accurate value, very very important stuff for usre
//Please work on this bro

//now let's make it much better for the betterment of this world -- hehehe

//Multiple return types ---
function getValue(myVal: number) {
  if (myVal > 5) {
    return true;
  }

  return "200 OK";
}

//Syntax for arrow function
const getHello = (s: string): string => {
  return "";
};

//
// const heroes = ["thor", "mayank", "man"];
const heroes = ["thor", "mayank", "man"];

//You can put stuff in here as well - amazing, stick to the syntax bruh
heroes.map((hero: string): string => {
  return `hero is ${hero}`;
});

//mention the return type always!! No matter what
function consoleError(errmsg: string): void {
  console.log(errmsg);
}

//You are never returning anything simple as that
function fail(msg: string): never {
  throw new Error(msg);
}
