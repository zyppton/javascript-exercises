const repeatString = function(word, times) {
    const theWord = word;
    let result = "";
    if (times > -1) {
        for (let i = times; i > 0; i--) {
            result = result + theWord;
        }
        return result;
    }else{
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
