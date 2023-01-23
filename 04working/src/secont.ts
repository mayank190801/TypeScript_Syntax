//interfaces
interface TakePhotoooo {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

//use of interface bruh!! - while making class
class Instagram implements TakePhotoooo {
  //not yet initialised with some value
  cameraMode: string = "fuck";
  filter: string = "fuck";
  burst: number = 123;

  //you want to take input you can hahahahahah - pretty cool
  //takes time to learn for sure
  constructor(cameraMode: string, filter: string, burst: string) {}
}

class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string
  ) {}

  createStory(): void {
    console.log("story was created!");
  }
}
