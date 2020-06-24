//https://www.codewars.com/kata/5708f682c69b48047b000e07
function multiply(number){
    let count = 0;
    let n = number;
    if(number < 0) n = -n;
    while (n > 0) {
        n = Math.floor(n/10);
        count++;
    }
    return number*5**count;
}