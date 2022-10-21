/**
 * @name random
 * @description Returns randomized string from provided string and string length
 *
 * @param {(String|Number)} string - string to randomize
 * @param {Number} [length=8] - length of randomized string
 * @return {(String|Number)} returned randomized string
 */
function random (string, length = 8) {
    if (!string) return;
    if (typeof string !== "string" && typeof length !== "number") return;
    var array = Array.from(string);
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

module.exports = random;