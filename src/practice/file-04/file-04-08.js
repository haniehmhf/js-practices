// Write an array sorting algorithm using insertion sort logic.

function insertionSort(arr) {

    let length = arr.length
    for (let i = 1; i < length; i++) {
        let tmp = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > tmp) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = tmp
    }

    return arr

}
let sor = insertionSort([5, 6, 3, 8])
console.log(sor)
