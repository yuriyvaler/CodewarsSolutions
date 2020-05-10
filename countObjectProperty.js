const obj = {};
const arr = ['a', 'b', 'a', 'c', 'c', 'c'];
for(let i = 0; i < arr.length; i++){
    if(!obj[arr[i]]) obj[arr[i]] = 1;
    else obj[arr[i]] += 1;
}