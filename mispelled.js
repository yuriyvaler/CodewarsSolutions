//https://www.codewars.com/kata/5892595f190ca40ad0000095
var mispelled = function(word1, word2) {
    if (Math.abs(word1.length - word2.length) > 1) return false;
    let count = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word2.includes(word1[i])) count++;
    }
    return (Math.abs(word1.length - count) < 2)
};