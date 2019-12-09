// Write the function “example”

"use strict"

class Pet {

}

class Dog extends Pet {
    bark() {
        console.log('woof')
    }
}

class Cat extends Pet {
    purr() {
        console.log("meow")
    }
}

function example() {
    let instance = arguments[0]
    if (instance instanceof Dog) {
        instance.bark()
    }
    if (instance instanceof Cat) {
        instance.purr()
    }
} 

example(new Dog())
example(new Cat())
