//what is the command for
console.log("hey there");
console.log("this works");

//Pretty amazing stuff for sure
//Some interesting things bruh!

class Game {
  private _courseCount = 1;
  protected _randomCount = 1;

  readonly city: string = "Jaipur"; //should be empty if not init
  constructor(public email: string, public name: string) {}

  //this function is only accessible within class
  private deleteToken() {
    console.log("make shit happen");
  }

  //getter function
  get getAppleEmail(): string {
    return `apple ${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

//That's all
//protected keyword now!! - simple accessible within classes, but not outside classes
//can not aquire private!!
class SubUser extends Game {
  isFamily: boolean = true;

  changeCourseCount() {
    this._randomCount = 4;
  }
}
