//Pretty dope stuff as much as I heard from hit for sure

let score: number | string = 2323;
//can be number or string as per need
score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let hitesh: User | Admin = {
  name: "Mayank",
  id: 334,
};

//can update this shit whenever he wants to, no errors from Ts
hitesh = {
  username: "hc",
  id: 232,
};

//You can do it like this if you want, that's how union works!!
function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id = id + 2;
  }
}

//More discussion on array
// const data: number[] | string[] = [1, 2, 3];  - all numbers or all strings error
const data: (string | number | boolean)[] = [1, "12123", true];

//one more dope use case for making enums!!
let seatAllotment: "aisle" | "middle" | "window";
