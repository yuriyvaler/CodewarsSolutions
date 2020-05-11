//https://www.codewars.com/kata/599db0a227ca9f294b0000c8
function testResult(array) {
    let count = 0;
    let obj = {'h': 0, 'a': 0, 'l': 0};
    for (let i in array) {
        count += array[i];
        if (array[i] > 8) obj['h'] ++;
        else if (array[i] > 6) obj['a'] ++;
        else obj['l'] ++;
    } return [+(count/array.length).toFixed(3), obj]
        .concat(obj['h'] == array.length ? ['They did well']: []);
}