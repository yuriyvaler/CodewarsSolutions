//https://www.codewars.com/kata/complementary-dna
function DNAStrand(dna){
    return dna.replace(/A/g, 't').
    replace(/T/g, 'A').
    replace(/C/g, 'g').
    replace(/G/g, 'C').
    replace(/g/g, 'G').
    replace(/t/g, 'T');
}