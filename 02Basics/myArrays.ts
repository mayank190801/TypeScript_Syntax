//Lets understand arrays in TypeScript!!
const supShit: string[] = [];
const ranShit: number[] = [];

supShit.push("randomSpidey");
ranShit.push(23);

//another way of doing this stuff
const hero: Array<number> = [];

type User = {
  name: string;
  isActive: boolean;
};

//You are making an array of User type!! Pretty simple
const allUsers: User[] = [];
allUsers.push({ name: "Mayank", isActive: false });

//one more way in case you wanna know shit
const MLModels: number[][] = [
  [123, 123],
  [123, 123, 123],
];
