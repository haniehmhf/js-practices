// What is generators in Javascript?

// The yield keyword is used to pause and resume a generator function
// The function* declaration (function keyword followed by an asterisk) defines a generator function,
// which returns a Generator object.

function* idMaker() {
    var index = 0;
    while (true)
        yield index++;
}

var gen = idMaker(); // "Generator { }"

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// ...


//---------------------

function* generatorTest() {
    yield 1
    yield* [2, 3]  
    return 4
}

let genTest = generatorTest()
console.log(genTest.next().value); // 1
console.log(genTest.next().value); // 2 // //=> if use yield on second row of fuction result =>  [2,3]
console.log(genTest.next().value); // 3
console.log(genTest.next().value); // 4








