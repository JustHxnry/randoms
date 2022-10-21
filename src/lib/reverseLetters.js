/**
 * @name reverseLetters
 * @description Reverses all the letters in the given string
 *
 * @param {(String|Number)} string - String to reverse letters in
 * @return {(String|Number)} Letter Reversed string
 */
function reverseLetters (string) {
    if (!string) return;
    if (typeof string != 'string' && typeof string != 'number') return;
    var array = Array.from(string);
    var reversedArr = array.reverse();
    var reversedString = reversedArr.join('');
    return reversedString;
};

module.exports = reverseLetters;