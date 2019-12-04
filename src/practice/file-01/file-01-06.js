// Write a singleton function, name it “Singleton”. Create a namespace for it.
// Add a multiplication function as a class method. The multiplication function
// should expect limitless number of arguments and every argument must be multiplied
// and returned. Save it Singleton.js and make it ready for usage.  (write it in ES5)
//
// Note: ensure that Singleton.getInstance() === Singleton.getInstance();

// answer:

//  Could solve with self-invoking functions too.
const Singleton = (function () {
    let instance;

    function contructor() {
        return {
            multiplication: function () {
                let mul = NaN;
                for (let i = 0; i < arguments.length; i++) {
                    if (!isNaN(arguments[i])) {

                        // set mul as 1 to start mul
                        if (isNaN(mul))
                            mul = 1;

                        mul *= parseInt(arguments[i]);
                    }
                }
                return mul;
            }
        }
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = contructor();
            }
            return instance;
        },
    }
})();

module.exports = Singleton.getInstance();




