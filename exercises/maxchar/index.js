// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let chars = {};
    let max = 0;
    let maxChr = '';
    for (let char of str) {
        chars[char] = chars[char] + 1 || 1;
        if (chars[char] > max){
            max = chars[char];
            maxChr = char;
        }
    }
    return maxChr;
}

module.exports = maxChar;
