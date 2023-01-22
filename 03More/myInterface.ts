//Loose form of class

//Quite like type till now
interface Person {
  readonly dbID: number;
  email: string;
  userId: number;
  random: string;
  googleId?: string;

  //   startTrail: () => string;  one way of doing things
  startTrail(): string; //much better way for sure
  getCoupon(couponname: string): number;
}

//reopening an interface, you could do that for sure
interface Person {
  githubToken: string;
}

//Inheritance possible with interface
interface Admin extends Person {
  role: "admin" | "ta" | "leader";
}

const mayank: Admin = {
  dbID: 123,
  email: "h@hg.com",
  userId: 123,
  random: "gamer",
  githubToken: "hey there",
  role: "admin",

  startTrail: () => {
    return "trail started";
  },

  getCoupon: (name: "hitesh10") => {
    // no need to match parameters name
    return 10;
  },
};

export {};

//Read about differences between types and interaces!! --- please read it
