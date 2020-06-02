//https://www.codewars.com/kata/56f4f7cfaf5b1f8cd100060e
const squaresOnly = array =>
    array.filter(el => Math.sqrt(el) % 1 === 0);
