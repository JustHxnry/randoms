/**
 * @name arrayRandom
 * @description Returns random value from an array
 *
 * @param {Array} array - array to get random value from
 * @return {*} random value from array
 */
function arrayRandom(array) {
    if (!array) return;
    if (typeof array !== "array" && !Array.isArray(array)) return;
    var length = array.length;
    var math = Math.floor(Math.random() * length);
    var result = array[math];
    return result;
};

module.exports = arrayRandom;