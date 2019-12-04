// Before promises how did the people solved async problems ?  

// using callback function

let obj = {
    name: "john"
}

function testCallback(number, cb) {
    console.log(number)
    if (typeof cb == "function") {
        cb.call(obj);
    }
};


testCallback(4, function () {
    console.log('callback function')
    console.log(this.name)
});

