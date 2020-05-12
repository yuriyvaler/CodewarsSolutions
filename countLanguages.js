//https://www.codewars.com/kata/coding-meetup-number-5-higher-order-functions-series-prepare-the-count-of-languages
function countLanguages(list) {
    let answer = {};
    for (let i in list) {
        if (answer[list[i].language] !== undefined) answer[list[i].language] ++;
        else answer[list[i].language] = 1;
    } return answer;
};

/*
function countLanguages(list) {
    let answer ={};
    list.forEach(el => (
        answer[el.language] !== undefined) ?
        answer[el.language] ++:
        answer[el.language] = 1);
    return answer;
}
 */