// Object getters and setters subjects. Also study what happens when only a getter is defined
// and when only setter is defined. Write in ES6 and check ES5 version.

// answer:
// with ES6
class Person {
   get name() {
      return this._name;
   }

   set name(name) {
      this._name = name;
   }
}

const p = new Person();
p.name = "Can";
console.log(p.name);


// with ES5
function FPerson() {
}

Object.defineProperty(FPerson.prototype, "name", {
   get: function () {
      return this._name;
   },
   set: function (name) {
      this._name = name;
   }
});

const fp = new FPerson();
fp.name = "Can";
console.log(fp.name);


let person = {
   name: "john",
   lastName: "mf",
   get fullName() {
      return `${this.name} ${this.lastName}`
   },

   set fullName(name) {
      var words = name.split(' ')
      this.name = words[0]
      this.lastName = words[1]
   }
}
console.log(person.fullName) //hani mf
person.fullName = "deniz ah"
let n = person.name //deniz
console.log(n)

// If we write only a getter, It returns a default value for the target variable. That in non-defined cases it's undefined.