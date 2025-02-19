const palindromes = function (string) {
        const newString = [...string.toLowerCase()].filter(letter => letter.match(/[a-z0-9]/i));

    for (let i = 0; i < newString.length / 2; i++) {
        if (newString[i] !== newString[newString.length - i - 1]) return false;
    }
    return true;
}

// Do not edit below this line
module.exports = palindromes;
