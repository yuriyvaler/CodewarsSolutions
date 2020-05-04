//https://www.codewars.com/kata/570e8ec4127ad143660001fd/javascript
function billboard(name, price = 30){
    let mult = 0;
    for (let i = 0; i < name.length; i++) {
        mult +=price;
    }
    return mult;
}