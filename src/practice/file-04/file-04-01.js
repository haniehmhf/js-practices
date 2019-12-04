// Write a summation algorithm in es6 with limitless number of arguments

function sum(...rest) {
   return rest.reduce((a, b) => b && !isNaN(b) ? a + parseInt(b) : a, 0)
}
let res = sum(1, 2, null, 3, 4, "8") // 18
console.log(res)