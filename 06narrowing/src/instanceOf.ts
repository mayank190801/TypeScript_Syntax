//instance of
function logValue(x: Date | string) {
  if (x instanceof Date) {
    return 123;
  } else {
    return 213123;
  }
}

//used for these kind of stuff simple logic
//so one really cool concept which I should note down here for sure
//which could really change the way I am doing stuff lately

//Let's figure this out
//One way of doing all this should be this only
interface User {
  kind: "user";
  name: "mayank";
}

interface Human {
  kind: "human";
  age: 123;
}

type Shape = User | Human;

function getResult(s: Shape) {
  if (s.kind === "user") {
    console.log(s.name);
  } else {
    console.log(s.age);
  }
}

//OR YOU CAN USE SWITCH STATEMENTS IN ABOVE WAY
function getMoreresult(s: Shape) {
  switch (s.kind) {
    case "user":
      console.log(s.name);
      break;
  }
}
