// Write an array sorting algorithm using selection sort logic.

function selectionSort(arr) {

    var length = arr.length
    var min; var tmp;
    for (var i = 0; i < length; i++) {
        min = i
        for (var j = i + 1; j < length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        tmp = arr[i]
        arr[i] = arr[min]
        arr[min] = tmp
    }
    return arr
}
let sor = selectionSort([5, 6, 3, 8])
console.log(sor)
