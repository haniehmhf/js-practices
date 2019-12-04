// Study IIFE;

// answer:
// IIFE aka Immediately Invoked Function Expression is what its name means. 
// Sometimes we need to gather some code in one function and make sure that executes instant without any calling.
// Actually to have an IIFE we should write an nameless/named function in parentheses and call it immediately.
// something like this:

(function () {
    var x = 10
    var y = 20
    var add = x + y;
    console.log(add)
}()); // 30


(function iife(msg, times) {
    for (var i = 1; i <= times; i++) {
        console.log(msg);
    }
}("Hello!", 5)); // 5 * "hello"
