// Write an array sorting algorithm using bubble sort logic.

function bublbeSort(arr) {
    let opt = 0
    arr.map(ar => {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = tmp
            }
            opt++
        }
    })
    console.log(opt)
    return arr
}
// const arrSort = bublbeSort(8, 9, 3, 6)
// console.log(arrSort) // => [3,6,8,9]
const arrSort2 = bublbeSort([8, 9, 3, 6])
console.log(arrSort2)
