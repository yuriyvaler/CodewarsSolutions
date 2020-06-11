//https://www.codewars.com/kata/5803956ddb07c5c74200144e
const datingRange = age => (age <=14)?
    `${Math.floor(age - 0.10 * age)}-${Math.floor(age + 0.10 * age)}`:
        `${Math.floor(age/2 + 7)}-${Math.floor((age -7) * 2)}`;