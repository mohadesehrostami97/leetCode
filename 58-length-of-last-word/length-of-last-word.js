/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let wordLength = s.trim().split(" ").pop().length
    return wordLength
    
};