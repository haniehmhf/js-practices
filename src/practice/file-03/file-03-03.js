// Deep clone vs shallow clone, study in depth

// First of all, what is a copy?

// A copy just looks like the old thing, but isn’t. When you change the copy, you expect the original
// thing to stay the same, whereas the copy changes.

// A deep copy means that all of the values of the new variable are copied and disconnected from the 
// original variable. A shallow copy means that certain (sub-)values are still connected to the original variable.


//shallow clone es6
let obj = {
    name : "hani",
    father : {
        name : "ali"
    } 
}

let obj2 = {...obj}
obj2.father.name = "john",
obj2.name = "piter"
console.log(obj.name) // => hani / orginal is not changed
console.log(obj.father.name) // => john / orginal is changed 

//shallow clone es5

let objES5 = {
    name : "hani",
    father : {
        name : "ali"
    } 
}

let objES5C = Object.assign({} , objES5)
objES5C.father.name = "john",
objES5C.name = "piter"
console.log(objES5.name) // => hani / orginal is not changed
console.log(objES5.father.name) // => john / orginal is changed 

// When you have a nested object (or array) and you copy it, nested objects inside that object will not be copied,
// since they are only pointers / references

//deep clone

let objDeep = {
    name : "hani",
    father : {
        name : "ali"
    } 
}

let objDeepC = JSON.parse(JSON.stringify(objDeep))
objDeepC.father.name = "john",
objDeepC.name = "piter"
console.log(objDeep.name) // => hani / orginal is not changed
console.log(objDeep.father.name) // => ali / orginal is not changed 