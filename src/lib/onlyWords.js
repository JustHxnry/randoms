/**
 * @name onlyWords
 * @description Filters words to the only ones that has same amount of letters
 *
 * @param {(String|Number)} string - string to be filtered
 * @param {Number} [letterCount=3] - needed number of letters
 * @return {Array} An array of words that meet the conditions
 */
function onlyWords(string, letterCount = 3) {
    if (!string) return;
    if (typeof string != 'string' && typeof string != 'number') return;
    if (typeof letterCount != 'number') return;
    var wordArr = string.split(' ');
    return wordArr.filter(x => x.length == Number(letterCount));;
};

module.exports = onlyWords;