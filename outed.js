//https://www.codewars.com/kata/the-office-i-outed
function outed(meet, boss){
    let count = 0;
    let i = 0;
    for (let key in meet) {
        if (key == boss) {
            count +=meet[key]*2;
        } else {
            count += meet[key];
        }
        i++
    }
    return (count/i > 5)? 'Nice Work Champ!': 'Get Out Now!';
};