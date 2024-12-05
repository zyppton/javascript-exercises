const reverseString = function(input) {
    let phrase = input;
    let phraseLength = phrase.length;
    let reversePhrase = "";

    for (let i = phraseLength; i >= 0; i--) {
        reversePhrase = reversePhrase + phrase.charAt(i);
    }

    return reversePhrase;
};

// Do not edit below this line
module.exports = reverseString;
