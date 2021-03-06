// Study what we can do with Object.assign() , also show the differences
// between Object.assign and Object.create

//__proto__ is an object in every class instance that points to the prototype it was created from. 
// In reality, the only true difference between prototype and __proto__ is that the former is a property of a class constructor,
// while the latter is a property of a class instance 
// Object.getPrototypeOf(obj4) === obj4.__proto__

let target1 = {}
let target2 = {}
let obj = { name: "hani" }
let object1 = { father: { name: "ali" } }


//assign

let obj1 = Object.assign(target1, obj)
console.log(obj1) //=> {name: "hani"}
console.log(target1) //=> {name : "hani"}

let obj2 = Object.assign(obj, {
  age: 20
})
console.log(obj2) //=> {name : "hani", age: 20}
console.log(obj) //=> {name : "hani", age: 20}


//Object.create

let obj4 = Object.create(object1, { age: { value: 20 } })
console.log(obj4) // {age:20}
console.log(obj4.__proto__) // {father : {name:"ali"}}
console.log(obj4.father.name) // ali
obj4.father.name = "john"
console.log(obj4.father.name) // john
console.log(object1.father.name) // john => overRide
console.log(object1 == obj4) //  false
console.log(Object.getPrototypeOf(obj4)) // {father : {name:"ali"}}  
console.log(Object.getPrototypeOf(obj4) === obj4.__proto__) // true

