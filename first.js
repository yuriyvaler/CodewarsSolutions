//https://www.codewars.com/kata/572b77262bedd351e9000076
function first(arr, n = 1) {
    let array = [];
    if (n > arr.length) n = arr.length;
    for (let i = 0; i < n; i++) {
        array[i] = arr[i];
    }
    return array;
}