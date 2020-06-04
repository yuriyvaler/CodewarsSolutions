//https://www.codewars.com/kata/55a13556ca4a6d0ab4000003
const Person = function(){
    const person = {
        _name: "Leroy",
        _friends: [],
        fillFriends(f) {return person._friends = f}
    }
    return person;
}