// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    
    return Math.sign(n) * parseInt(n.toString().split('').reduce((reversed, char) => char + reversed , ''));
}

function reverseInt2(n) {
    
    return Math.sign(n) * parseInt(n.toString().split('').
    reverse().join(''));
}

function reverseInt3(n) {
    const reversed = n.toString().split('').reverse().join('');

    if (n < 0) {
        return  parseInt(reversed) * -1;
    }
    return  parseInt(reversed);
}

module.exports = reverseInt3;
