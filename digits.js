//https://www.codewars.com/kata/every-possible-sum-of-two-digits
function digits(num){
    let arr = num.toString().split('').map(el => +el);
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            newArray.push(arr[i]+arr[j]);
        }
    }
    return newArray;
}