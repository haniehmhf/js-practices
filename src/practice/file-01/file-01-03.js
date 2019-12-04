// Convert the following to ES5
"use strict";

class CarES6 {
    constructor(position, speed) {
    }

    move() {
        this.position += this.speed;
    }
}

// answer:

function Car(position, speed) {
    this.position = position
    this.speed = speed
}

Car.prototype.move = function () {
    this.position += this.speed
}