/**
 * @name reverseWords
 * @description Reverses all the words in the given string
 *
 * @param {(String|Number)} string - String to reverse words in
 * @return {(String|Number)} Word Reversed string
 */
function reverseWords (string) {
    if (!string) return;
    if (typeof string != 'string' && typeof string != 'number') return;
    var array = string.split(' ');
    var reversedArr = array.reverse();
    var reversedString = reversedArr.join(' ');
    return reversedString;
};

module.exports = reverseWords;