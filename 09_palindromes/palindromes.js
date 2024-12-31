const palindromes = function (word) {
    const wrd = word;
    let newWord = ""
    let reverse = "";

    for (i = 0; i <= (wrd.length - 1); i++) {
        if (/^[a-zA-Z]$/.test(wrd[i]) || !isNaN(wrd[i]) && wrd[i] != " ") {
            newWord += wrd[i].toLowerCase();
        }
    }

    for (i = (wrd.length - 1); i >= 0; i--) {
        if (/^[a-zA-Z]$/.test(wrd[i]) || !isNaN(wrd[i]) && wrd[i] != " ") {
            reverse += wrd[i].toLowerCase();
        }
    }
    if (newWord === reverse) {
        return true;
    } else {
        return false;
    }
};

// console.log(palindromes("thing"));

// Do not edit below this line
module.exports = palindromes;
