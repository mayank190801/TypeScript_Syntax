//Let's figure them out now
//Really crazy and really awesome

//one option
const AISLE = 0;
const MIDDLE = 1;
const WINDOW = 2;

//better
//You can set values on your own simple
const enum seatChoice {
  AISLE = 10,
  MIDDLE = 123,
  WINDOW,
}

const hcSeat = seatChoice.AISLE; //only few specific options
