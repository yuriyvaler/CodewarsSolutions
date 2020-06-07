//https://www.codewars.com/kata/59126992f9f87fd31600009b
function whoseMove(lastPlayer, win) {
    let obj = {
        "black": "white",
        "white": "black",
    }
    return win ? lastPlayer: obj[lastPlayer];
}