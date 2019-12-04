// Import rxJS library, prepare an observable, broadcast 2 messages with timeintervals of 1000 and 2000ms using next() , 
// broadcast an error additionally, in the and broadcast a complete() message Subscribe to it with a subscription object. 
// After 5000ms unsubscribe from the observable. And RELEASE ALL THE RESOURCES !!! (do whatever is necessary about observables and timeintervals)


import { Observable } from 'rxjs'

const observable = Observable.create(obs => {
    const myData = ["a", undefined, "c", "d", "e", "f"]
    let n = 1;
    const iv = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * myData.length);
        if (randomIndex === 1) {
            obs.error("Invalid index.");
            clearInterval(iv)
        }
        obs.next(myData[randomIndex]);
        n++;
        if (n > 2) {
            obs.complete("N reached 2");
            clearInterval(iv)
        }

    }, 1000)
})

const sub = observable.subscribe({
    next(x) {
        console.log(x);
    },
    error(err) {
        console.log(err)
    },
    complete() {
        console.log("completed")
    }
});

setTimeout(() => {
    sub.unsubscribe();
    console.log("unsubscribed")
}, 5000);