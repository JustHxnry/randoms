/**
 * @name randomNum
 * @description Returns random number between two values
 *
 * @param {Number} [from=0] - The number from which to randomize
 * @param {Number} [to=10] - The number to which to randomize
 * @return {Number} The randomly returned number
 */
function randomNum (from = 0, to = 10) {
    if (typeof from !== 'number') return;
    if (typeof to !== 'number') return;
    var result = Math.floor(Math.random() * (to - from + 1) + from);
    return result;
};

module.exports = randomNum;