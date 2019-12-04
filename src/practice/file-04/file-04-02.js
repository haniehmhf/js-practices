// Write a multiplier algorithm in es6 with limitless number of arguments

function multiplier(...rest) {
   return rest.reduce((a, b) => (b || b == 0) && !isNaN(b) ? a * parseInt(b) : a, 1)
}
let res = multiplier(1, 2, 3, 4, 8, 0) // 192
console.log(res)