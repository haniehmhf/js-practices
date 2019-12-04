import { Subject, BehaviorSubject } from "rxjs";

//What is Subject & Behavioral Subject, study in detail.
// Try to build a Service system which shares data among the subscribers. Try to utilize data streaming using subject.  

//answer :
// A Subject is like an Observable, but can multicast to many Observers. 

const subjectObs = new Subject();

subjectObs.next(0) // dont subscribe
subjectObs.subscribe({
    next: x => console.log('first sub ' + x),
    complete: x => console.log('completed')
})
subjectObs.next(1)
subjectObs.subscribe({
    next: x => console.log('second sub ' + x),
})

subjectObs.next('new data')
subjectObs.complete()

//out put : 
// first sub 1 // only subscribe with first 
// first sub new data
// second sub new data
// complete



// BehaviorSubject

const behaviorObs = new BehaviorSubject(0);

behaviorObs.next(1) 
behaviorObs.subscribe({
    next: x => console.log('first sub ' + x),
    complete: x => console.log('completed')
})
behaviorObs.next(2)
behaviorObs.subscribe({
    next: x => console.log('second sub ' + x),
})

behaviorObs.next('new data')
behaviorObs.complete()

//  first sub 1
//  first sub 2
//  second sub 2
//  first sub new data
//  second sub new data
//  completed