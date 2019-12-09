// Study how “extends” keyword in ES6 is converted to ES5 statements

//es6

class Person {

  constructor(name,age,gender){
      this.name = name
      this.age = age
      this.gender = gender
  }

  getName(){
    return this.name
  }

  getAge(){
    return this.age
  }

  getGender(){
    return this.gender
  }
}

class Student extends Person{
  constructor(name,age,gender,marks){
    super(name,age,gender)
    this.marks = marks
  }

  getMarks(){
    return this.marks
  }
}


let s1 = new Student("hani", 25 , "female" ,15)
console.log(s1.getAge()) //=> 25
console.log(s1.getMarks()) // 15


//es5

function PersonES5(name,age,gender){
  this.name = name
  this.age = age
  this.gender = gender
}

PersonES5.prototype.getNameES5 = function(){
  return this.name
}

PersonES5.prototype.getAgeES5 = function(){
  return this.age
}

PersonES5.prototype.getGenderES5 = function(){
  return this.gender
}

function StudentES5(name,age,gender,marks){
  PersonES5.call(this,name,age,gender)
  this.marks = marks
}

StudentES5.prototype = Object.create(PersonES5.prototype)
StudentES5.prototype.constructor = StudentES5

StudentES5.prototype.getMarksES5 = function(){
  return this.marks
}

let s2 = new StudentES5("hani" , 25 , "female" , 15)
console.log(s2.getAgeES5()) // 25
