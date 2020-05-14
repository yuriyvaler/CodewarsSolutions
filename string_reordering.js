//https://www.codewars.com/kata/5b047875de4c7f9af800011b
function sentence(List) {
    let obj = {};
    for (let i in List) {
        obj[Object.keys(List[i])] = Object.values(List[i]);
    }
    return Object.keys(obj).sort((a,b)=> a-b).map(el => obj[el]).join(' ');
};