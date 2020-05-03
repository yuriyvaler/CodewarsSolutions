//https://www.codewars.com/kata/56b1f01c247c01db92000076/solutions/javascript
//Double Char

function doubleChar(str) {
    let st = ''
    for (let i = 0; i < str.length; i++) {
        st += str[i] + str[i];
    } return st;
}