//Study rxJS library array operations such as map, flatMap, swithcMap, filter, distinctUntilChanged,
// takeUntil, tap etc. And use them in an example. Join creation operators. Source : https://rxjs.dev/

import { Observable, from, of, interval, fromEvent } from 'rxjs'
import { map, flatMap, mergeMap, pipe, switchMap, filter, distinctUntilChanged, takeUntil, tap } from 'rxjs/operators'

//map: 
const myData = [1, 2, 3, undefined]
const obs = Observable.create(observer => {
    for (let index in myData) {
        if (myData[index] === undefined || typeof myData[index] === 'string') {
            observer.error('invalid data')
        } else {
            observer.next(myData[index])
        }
    }
})

const subscription = obs.pipe(
    map(x => x * 10)
).subscribe({
    next: x => console.log(x),
    error: err => console.log(err)
}) // 10 20 30 'invalid data'

subscription.unsubscribe();

//flatmap:
const flatData = [2, 4, 3, [4, 5, [6, 7]]]
const flatObs = of(flatData)
flatObs.pipe(
    flatMap(x => [x])// [2, 4, 3, Array(3)]
).subscribe(x => console.log(x));

//switchMap:
var button = document.querySelector('button')
var obs1 = fromEvent(button, 'click')
var obs2 = interval(1000)
const sub = obs1.pipe(switchMap(ev => obs2)).subscribe(v => console.log(v)); // canceled first obs1 after click // 0,1,2,...
setTimeout(() => {
    sub.unsubscribe() // unsubscribe after 7
}, 7000)

//filter
const filterData = ["hello", "my", "world", undefined, 2]
const filterObs = Observable.create(observer => {
    for (let index in filterData) {
        if (filterData[index] === undefined || typeof filterData[index] === 'number') {
            observer.error('invalid data')
        } else {
            observer.next(filterData[index])
        }
    }
})

filterObs.pipe(
    filter(str => str.includes("h"))
).subscribe({
    next: x => console.log(x), // hello 
    error: err => console.log(err) // invalid data for 2
})

//distinctUntilChanged
const source = from([
    { name: 'can' },
    { name: 'Joe' },
    { name: 'Joe' },
    { name: 'hani' }
]);

source
    .pipe(distinctUntilChanged((prev, curr) => prev.name === curr.name))
    // output: { name: 'can' }, { name: 'Joe' }, { name: 'hani' }
    .subscribe(console.log);


//takeUntil
var stopBtn = document.getElementsByClassName('stop')
const valueObs = interval(1000)
const stopEvent = fromEvent(stopBtn, 'click')
valueObs.pipe(takeUntil(stopEvent)).subscribe(val => console.log(val)) // emmit value until when I click stop button

//tap
const tapData = [11, 12, 13]
const tapObs = of(tapData)
tapObs.pipe(
    tap(x => x)
).subscribe(value => console.log(value)) // [11,12,13] // if use tap(x => x*10) again my out put equel [11,12,13] , tap method dont change value

//join operators:

