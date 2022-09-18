module.exports = {
    arrayRandom: function(array) {
        if (!array) return;
        if (typeof array !== "array" && !Array.isArray(array)) return;
        var length = array.length;
        var math = Math.floor(Math.random() * length);
        var result = array[math];
        return result;
    },
    objectRandom: function(object) {
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
    },
    randomString: function(length = 8) {
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
    },
    random: function(string, length = 8) {
        if (!string) return;
        if (typeof string !== "string") return;
        if (typeof length !== "number") return;
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
    },
    randomNum: function(from = 0, to = 10) {
        if (typeof from !== 'number') return;
        if (typeof to !== 'number') return;
        var result = Math.floor(Math.random() * (to - from + 1) + from);
        return result;
    }
};