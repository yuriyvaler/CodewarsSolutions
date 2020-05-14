//https://www.codewars.com/kata/most-valuable-character
function solve(st) {
    let obj = {};
    let alph = "abcdefghijklmnopqrstuvwxyz"
    for (let i in st) {
        if (obj[st[i]] === undefined) obj[st[i]] = 0;
        if (alph.includes(st[i]))
            obj[st[i]] = st.lastIndexOf(st[i])- st.indexOf(st[i]);
    }
    let max = obj[st[0]];
    for (let key in obj) {
        if(obj[key] > max) max = obj[key];
    }
    return Object.keys(obj).sort().find(el => obj[el] == max);
}