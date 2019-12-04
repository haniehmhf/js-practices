// Write a function that camel cases a string, name it as “toCamelCase”
// and add it to javascript string library. The expected input
// and output is as follows :
// "This is an example".toCamelCase(); // => "thisIsAnExample"

"use strict";

String.prototype.toCamelCase = function () {
    const strArr = this.split(" ");

    for (let index in strArr) {
        if (parseInt(index) === 0) {
            strArr[index] = strArr[index][0].toLowerCase() + strArr[index].substr(1)
        } else {
            strArr[index] = strArr[index][0].toUpperCase() + strArr[index].substr(1)
        }
    }

    return strArr.join("")
};

console.log("this is an example".toCamelCase());
