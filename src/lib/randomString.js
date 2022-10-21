/**
 * @name randomString
 * @description Returns random string with selected length from alphabet with numbers
 *
 * @param {Number} [length=8] - Length of the string
 * @return {(String|Number)} Returned string
 */
function randomString (length = 8) {
    if (typeof length !== 'number') return;
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var row = lower + upper + numbers;
    var array = Array.from(row);
    let result = "";
    let i = 0;
    while (i < length) {
        var math = Math.floor(Math.random() * array.length);
        var selectedChar = array[math];
        result = result + selectedChar;
        i = i + 1;
    };
    return result;
};

module.exports = randomString;