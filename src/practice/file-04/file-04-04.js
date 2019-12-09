// Copy an object into another with full properties, including symbol definitions and own properties.
// Hint : getOwnPropertyDescriptors. Study on how getOwnPropertyDescriptors method is formed before
// this feature was released. Prepare an iteration among an object’s properties.

// answer:

// Each property of an object has it's own build-it attributes that makes it and specify
// the behavior of it in object.
// Exactly like the attributes that we use for Object.define() method.
// configurable, enumerable, value, writable are that attributes and the getOwnPropertyDescriptors
// method return an object of properties that contain these details.

const myObj = {
  name: "Can",
  age: 30
};

// for example, the descriptor of myObj should something like this:
// Object.getOwnPropertyDescriptors(myObj)
/*
{
 "name": {
   "enumerable": true,
   "configurable": true,
   "writable": true,
   "value": "Can",
 },
 "age": {
   "enumerable": true,
   "configurable": true,
   "writable": true,
   "value": 30,
 }
}
*/

// we can define or alter the descriptor.
Object.defineProperty(myObj, "iterationProp", {
  value: "This is an read-only, iteration-able property for myObj",
  enumerable: true,
  writable: false,
});

// ...
// after above changes on myObj, the descriptor will have new face like below:
/*
{
 "name": {
   "enumerable": true,
   "configurable": true,
   "writable": true,
   "value": "Can",
 },
 "age": {
   "enumerable": true,
   "configurable": true,
   "writable": true,
   "value": 30,
 },
 "iterationProp": {
   "enumerable": true,
   "configurable": true,
   "writable": false,
   "value": "This is an read-only, iteration-able property for myObj",
 }
}
*/
// All the attributes except *value* will have *true* as it's default value.

const targetObj = {};

const metaData = Object.getOwnPropertyDescriptors(myObj)

for (let prop in metaData) {
  Object.defineProperty(targetObj, prop, metaData[prop])
}

console.log(metaData)
console.log(Object.getOwnPropertyDescriptors(targetObj))