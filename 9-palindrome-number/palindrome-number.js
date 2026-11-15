/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const string = x.toString()
    const reversed = string.split('').reverse().join('')
    return string === reversed
};