// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    str = str.split("");
    for (let i=0; i < Math.floor(str.length / 2); i++) {
        let temp = '';
        temp = str[i];
        str[i] = str[(str.length - 1) - i];
        str[(str.length - 1) - i] = temp;  
    }
    return str.join("");
}

function reverse1(str) {

    return str.split("").reverse().join("");
}
module.exports = reverse1;
