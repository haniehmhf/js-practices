function Human(name, age) {
  this.name = name;
  this.age = age === void 0 ? 30 : age;
  this.sound = "Hey";
}

Human.age = 35
Human.speak = function () {
  console.log(this.sound)
}
Human.greet = function () {
  console.log("my age is " + this.age)
}
Human.prototype.speak = function (age) {
  console.log("my name is " + this.name + ", I am " + this.age)
}
Human.prototype.shout = function () {
  console.log(this.sound + ", my name is " + this.name)
}

var man = new Human()
var woman = new Human("woman")
var boy = new Human("boy", 4)
var girl = new boy.constructor("girl")



Human.speak() // undefined
man.speak()   // my name is undefined , I am 30
boy.speak()   // my name is boy , I am 4
woman.speak() // my name is woman , I am 30
Human.greet() // my age is age is 35
man.sound     // Hey
Human.prototype.speak() // my name is undefined, I am undefined
boy.greet()   // TypeError: boy.greet is not a function
Human.name    // Human
girl.shout()  // Hey, my name is girl
