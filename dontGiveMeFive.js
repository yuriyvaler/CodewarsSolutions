//https://www.codewars.com/kata/dont-give-me-five
function dontGiveMeFive(start, end) {
    let count = 0;
    let sub = Math.abs(end-start) + 1;
    for (let i = start; i <= end; i++) {
        if (i.toString().includes("5")|| i.toString().includes("-5")) count++;
    }
    return sub - count;
};
