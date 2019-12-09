// What are Named functions and anonymous functions, study the difference between them.

//named function

function NameFunc(name) {
    return name
}

let name = NameFunc("hani")
console.log(name) // hani


//anonymous function
let anonymousFunc = function (name) {
    return name
}

console.log(anonymousFunc('hani')) // => 

//use callback

let arr = [1, 2, 3]
let result = arr.reduce(function (a, b) {
    return a + b
}, 0)
console.log(result);

//Closure IIEF

(function () {

    var name = "john"
    function diplayeName() {
        alert(name)
    }

    return displayName()
})();


// hoist error on anonymous

let a = add(1, 2) // works => hoist
// let b = plus(1,2) // error => not defined => not hoist

function add(a, b) {
    return a + b
}

let plus = function (a, b) {
    return a + b
}

add(1, 2) // works
plus(1, 2) // works