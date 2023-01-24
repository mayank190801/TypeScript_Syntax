"use strict";
class ParkingSystem {
    constructor(big, medium, small) {
        this.big = big;
        this.medium = medium;
        this.small = small;
    }
    addCar(carType) {
        switch (carType) {
            case 1:
                this.big--;
                return this.big >= 0;
            case 2:
                this.medium--;
                return this.medium >= 0;
            case 3:
                this.small--;
                return this.small >= 0;
        }
        return false;
    }
}
