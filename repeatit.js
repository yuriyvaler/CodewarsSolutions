// https://www.codewars.com/kata/repeatit
const repeatIt = (str, n) =>
    (typeof str === 'string')? str.repeat(n):
        "Not a string";