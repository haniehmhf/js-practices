// What are Node list and array like objects? Give an example in DOM. How to convert array like objects to array?

// answer:

// NodeList is a collection of DOM nodes. And will return by build-in methods
// like document.querySelectorAll and elm.childNodes.
// NodeList is not an array but it has length property. It's iterable and we could use .forEach, .keys,
// entries and .values to fetch the iteratable of ths list. also it's possible to access the item with
// it's index like, nodeList[index];

// We could convert NodeList to an array like this:

// Using tha slice method of Array Object
const arrayOfNodes1 = Array.prototype.slice.call(document.querySelectorAll("div"));

// with Array.from es6
const arrayOfNodes2 = Array.from(document.querySelectorAll("div"));
