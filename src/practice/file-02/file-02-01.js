// In es5 generate a class, put some private variables,
// make it impossible to change them.

// answer:

var lib = (function () {

    var _libName = "MyLib";

    function printName() {
        console.log(_libName)
    }

    return {
        get name() {
            return _libName;
        },
        set name(newName) {
            _libName = newName;
        },
        printName: printName,
    }
})();

lib.printName();
lib.name = "MyNewLib";

console.log(lib.name);
