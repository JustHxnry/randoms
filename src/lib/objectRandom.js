/**
 * @name objectRandom
 * @description Returns random object key with it's value
 *
 * @param {Object} object - The object to randomize
 * @return {Object} Returned random object key with it's value
 */
function objectRandom (object) {
    if (!object) return;
    if (typeof array !== "object" && Array.isArray(object)) return;
    var arrNames = Object.keys(object);
    var arrValues = Object.values(object);
    var length = arrNames.length;
    var math = Math.floor(Math.random() * length);
    var resName = arrNames[math];
    var resValue = arrValues[math];
    let result = {};
    result[resName] = resValue;
    return result;
};

module.exports = objectRandom;