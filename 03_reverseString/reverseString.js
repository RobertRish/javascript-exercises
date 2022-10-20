const reverseString = function(string) {
    let newString = '';
    for (let i = 1; i <= string.length; i++) {
        let getLast = string.substr(-i, 1);
        newString += getLast;
    }
    return newString;
};

// npm test reverseString.spec.js

// Do not edit below this line
module.exports = reverseString;
