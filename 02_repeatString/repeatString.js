const repeatString = function(string, num) {
    if (num < 0) return 'ERROR';
    let newString = '';
    for (i = 1; i <= num; i++) {
        newString += string;
    }
    return newString;
};

// npm test repeatString.spec.js





// Do not edit below this line
module.exports = repeatString;
