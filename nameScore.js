//https://www.codewars.com/kata/what-is-my-name-score-number-1
function nameScore(name){
    const obj = new Object();
    obj[name] = 0;
    n = name.replace(/\s/g, "").toUpperCase();
    for (let i in n) {
        for (let j in alpha) {
            if (j.includes(n[i])) obj[name] += alpha[j]
        }
    }
    return obj;
}