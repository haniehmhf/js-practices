// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);
me.name = "Matthew";
me.isHuman = true;

person.printIntroduction() // 'My name is undefined. Am I human? false'
me.printIntroduction() // My name is Matthew. Am I human? true 