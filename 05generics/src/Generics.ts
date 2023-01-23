const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

//also not working
function identityTwo(val: any): any {
  return val;
}

//so cool bruh
function identityThree<Type>(val: Type): Type {
  return val;
}

//you mention and use that type for sure -- how cool?
identityThree(3);

//normal function method for sure no?? -- kinda works for real
function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

//You can make interface and use it as a type
identityFour<Bottle>({
  brand: "Mayank",
  type: 123,
});
