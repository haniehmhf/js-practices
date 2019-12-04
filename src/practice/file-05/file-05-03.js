// Give an example on promises using es6 syntax new Promise(). Use setTimeout for delaying the time.

let test = function (str) {
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

(async () => {

    try {
        let res = await test("john")
        console.log("sucess", res)
    }
    catch (error) {
        console.log(error)
    }
})()