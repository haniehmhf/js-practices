// use Promise.race([]) wait any promise resolved or rejected
let checkArg = function (str) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!str || typeof str !== "string") {
                reject(false)
            }
            else {
                resolve(str.repeat(2));
            }
        }, 2000);
    })
};

let showName = function (name) {
    return new Promise((resolve, reject) => {
        if (name && typeof name == "string") {
            resolve(name)
            console.log(name)
        } else {
            reject()
        }
    })
};

Promise.race([checkArg('hi'), showName('john')])
    .then(function (result) { // result after promise showNAme resolved
        console.log(result)
    })
    .catch((err) => console.log(err))



