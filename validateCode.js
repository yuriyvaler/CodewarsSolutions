//https://www.codewars.com/kata/validate-code-with-simple-regex
function validateCode (code) {
    let str = code.toString();
    for (let i = 1; i < 4; i++) {
        if (str.startsWith(i)) return true;
    }
    return false;
}