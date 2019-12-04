// Practice coding on “spread and rest parameters”. Study how functions can utilize
// them. Always think in es5 way and try to find es5 could implement “...” rest operator.
//
// Hint: think of call and apply functions.

//es6 

//rest :
function sum(...rest) {

  return rest.reduce((a, b) => a + b)

}

console.log(sum(1, 2, 3))


//spread

let arr = [1, 2, 3]
// let max = Math.max(arr) => Nan
let max = Math.max(...arr)
console.log(max)
//merg
let arr2 = [2, 3, 4, 5]
let arr3 = [...arr, ...arr2]
console.log(arr3) //=> [1, 2, 3, 2, 3, 4, 5]

let st = "hello"
let sp = [...st]
console.log(sp) //=> ["h", "e", "l", "l", "o"]



//es5

//rest

function sumES5() {

  const arr1 = Array.prototype.slice.call(arguments)
  return arr1.reduce((a, b) => a + b)

}

console.log(sumES5(1, 2, 3))


//spread

let arrES5 = [1, 2, 3]
let maxES5 = Math.max.apply(Math, arrES5)
console.log(maxES5)



let stt = "hello"
console.log(Array.from(stt)) //=> ["h", "e", "l", "l", "o"]






