//https://www.codewars.com/kata/permute-a-palindrome
function permuteAPalindrome (input) {
    let obj = new Object();
    for (let i in input) {
        if (obj[input[i]] === undefined) obj[input[i]] = 1;
        else obj[input[i]]++;
    }
    let arr = Object.keys(obj).filter(el => obj[el] % 2 == 0);
    return Object.keys(obj).length - arr.length < 2 ;
}