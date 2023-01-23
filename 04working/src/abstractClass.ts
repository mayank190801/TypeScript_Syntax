//interfact implemented by the class

//almost like blueprint
abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void; //not gonna provide you a defination
  random(): void {
    console.log("this bad boi works");
  }
}

// const ms = new TakePhoto("random", "damn");
class SnapChat extends TakePhoto {
  //weird syntax for sure, bruh
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("wonders bitch");
  }
}

const hc = new SnapChat("Random", "gamer", "random");
