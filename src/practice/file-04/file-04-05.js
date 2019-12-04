// Void 0 vs undefined. Compare
// a === undefined ? typeof a === “undefined” ?
// How to build a strong null & undefined check for variables?

//"void 0" is safer. "undefined" is a value, like any other. It's possible to overwrite that value with another:
console.log(null == undefined) // true
console.log(undefined)
// var undefined = 3
//console.log(undefined) // 3
console.log(void 0) // undefined
console.log(typeof a) // undefined
var b;
console.log(typeof b) // undefined

function isEmpty(val) {
   return val == void 0 || val === null
}


var b = void (0)
console.log(isEmpty(b)) // true
console.log(isEmpty(undefined)) // true
console.log(isEmpty(null)) // true
console.log(isEmpty(null)) // true
