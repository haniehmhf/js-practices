// Use Promise.all function for building a chain of promises.

// use Promise.all([]) wait all promise resolved or rejected
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
            console.log(name)
            resolve(name)
        } else {
            reject()
        }
    })
}

Promise.all([checkArg('hi'), showName('can')])
    .then(function (result) { // result after 2second :)
        console.log(result)
    })
    .catch((err) => console.log(err))



