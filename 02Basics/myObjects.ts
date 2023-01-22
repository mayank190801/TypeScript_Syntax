const User = {
  name: "mayank",
  email: "hitesh",
  isActive: true,
};

//basic way of doing stuff
function createUser({ name: string, isPaid: boolean }): void {
  console.log("hey");
}

createUser({ name: "hitesh", isPaid: false });

//return object from a function
function createCourse(): { name: string } {
  return { name: "mayank" };
}

//alias
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

// type Mystring = string  //stupid shit - technically allowed tho

//kind of making dataTypes in here
function createUser2(user: User): User {
  return { name: "", email: "", isActive: false };
}
createUser2({ name: "", email: "", isActive: false });

type Use = {
  readonly _id: string; //no one can change it anymore
  name: string;
  email: string;
  isActive: boolean;
  creditCard?: number; //optional stuff, you want to add or not upto you
};

let myUser1: Use = {
  _id: "123",
  name: "mayank",
  email: "hahah@gmail.com",
  isActive: false,
};

myUser1.email = "random@gmail.com";
// myUser1._id = "123"; //simple read only property bruh

export {};
