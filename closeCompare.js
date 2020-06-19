//https://www.codewars.com/kata/56453a12fcee9a6c4700009c
function closeCompare(a, b, margin = 0){
    return (margin >= Math.abs(a-b)) ? 0:
        (margin < a-b) ? 1: -1
}