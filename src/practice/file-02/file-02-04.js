//  Practice coding on MAP, REDUCE and arrow functions. Write some code
//  segments as example. Also write 2 “add” functions with limitless
//  parameters either with only REDUCE or REST parameters.

//map 

let obj = {
  name: "hello"
}
let arr = ["hani", "can"]

let arr2 = arr.map(function (i) {
  return `${this.name} ${i}`
}, obj)

console.log(arr2) //=> ["hello hani" , "hallo can"]


//reduce

let reduceV = [2, 3, 4]
let reduceRes = reduceV.reduce(function (a, b) {
  return a + b
}, 0)

console.log(reduceRes) //=> 9


//arrow function

let reduceVA = [2, 3, 4]
let reduceResA = reduceV.reduce((a, b) => a + b, 0)

console.log(reduceResA) //=> 9

//add with rest
function sum(...rest) {
  let total = 0
  rest.forEach(i => total += i)
  return total
}

console.log(sum(1, 2, 3))

//es5

//with reduce & arguments 
function sumES5() {

  const arr1 = Array.prototype.slice.call(arguments)
  return arr1.reduce((a, b) => a + b)

}






