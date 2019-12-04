// Explain the following ES6 code segment.
"use strict";

class Car {
    constructor() {
        this.position = 0;
        this.speed = 42;
    }

    move() {
        this.position += this.speed;
    }
}

class SelfDrivingCar extends Car {
    move() {
        super.move();
        super.move();
    }

}

const sd = new SelfDrivingCar();

sd.move();

// answer:
// In Javascript the extended class should use *super* keyword to access
// to the properties and methods of the parent class.
// And in the SelfDrivingCar class the move method override the move method and
// used the move method of the parent. That changes the position of the *sd* from 0 to 84;