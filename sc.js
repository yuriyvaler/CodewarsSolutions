//https://www.codewars.com/kata/570bcd9715944a2c8e000009
const sc = floor =>
    (floor > 6) ? "Aa~ ".repeat(floor-1) + "Pa!":
        (floor <=1) ? "" : ("Aa~ ".repeat(floor-1) + "Pa!" + " Aa!");