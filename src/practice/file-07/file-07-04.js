//Import Http library which utilizes rxJS api (ie. as it returns observables). 
import { pipe } from 'rxjs'
import { switchMap, filter, catchError, map } from 'rxjs/operators'
import { fromFetch } from 'rxjs/fetch';

//Send a get request to a public api. Get the response object. Filter it with a proper condition (i.e id > 5 or find out switcha specific condition which is capable of filtering the data).
// Then prepend a specific property (i.e name) with “developer-” prefix. In the end subscribe to it and display the data in html. Use DOM methods to show the data. 

const fetchObs = fromFetch('./person.json');

catchError(err => {
    console.error(err);
    return of({ error: true, message: err.message })
});

fetchObs.pipe(
    switchMap(response => {
        if (response.ok) {
            return response.json()
        } else {
            return of({ error: true, message: `Error ${res.status}` });
        }
    }),
    switchMap(item => {
        return item.user;
    }),
    filter(item => item.id > 5), // filter id > 5 output :  {id: 8, name: "can"}
    map(item => {
        return `developer ${item.name}`
    })
)
    .subscribe({
        next: x => printName(x) // developer can
    })


function printName(val) {
    let el = document.createElement('p');
    el.textContent = val
    document.body.appendChild(el)
}


