// In es5 generate a class, put some private variables,
// make it impossible to change them.

// answer:

function MyClass() {

    let varOne = "Test One";
    let varTwo = "Test Two";

    this.getVarOne = function () {
        return varOne;
    };

    this.getVarTwo = function () {
        return varTwo;
    }
}

var myObject = new MyClass();
console.log(myObject.getVarTwo());

