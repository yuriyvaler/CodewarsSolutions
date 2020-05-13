//https://www.codewars.com/kata/how-many-days-are-we-represented-in-a-foreign-country
function daysRepresented(trips){
    let obj = {};
    for (let i in trips) {
        for (let j = trips[i][0]; j <= trips[i][1]; j++) {
            obj[j] = true;
        }}
    return Object.keys(obj).length;
};