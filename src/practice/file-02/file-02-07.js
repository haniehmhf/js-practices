// What does “require” function do ? Run in nodeJs environment and
// think on how it is transpiled and how it works ? Think on how one file
// can use the other files export ? How possible is the object sharing
// between js documents ? Try to Think in es5 way ...

// answer:
// All the answer is related to modules!
// Modules are pieces of code that handle one or many functionality.
// Common way is writing modules in files and *export* them to use in any place that is required!
// The *require* help us to load modules perfectly. Actually the *require* is not a built-in js standard.
// In ES6 we have *import* and export to module loading.

// How it works?
// Suppose that there is a global variable like _MODULES_ which is an object, when the require method
// like *require("fs")* calls, a property will add to the _MODULES_ object for the *fs*.
// and after that, JS is able to access the *_MODULES_.fs* wherever needed.