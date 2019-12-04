// fetch api

//get

var url = "./product.json"
var products;


// // with then catch

// fetch(url)
//     .then(resp => resp.json())
//     .then((data) => {
//         console.log(data.product)
//         products = data.product
//         products.map(p => console.log(p.title)) // book1 , book2
//     })
//     .catch(error => console.log(error))

// // Handling more requests like POST
// console.log(products)


//with async await

async function fetchData() {
    const res = await fetch(url);
    return await res.json();
}

fetchData()
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })

