/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0]
    for(let i=1 ; i < strs.length ; i ++){
        let word = strs[i]
        while(!word.startsWith(prefix) && prefix.length > 0){
            prefix = prefix.slice(0,-1)
        }
    }
    return prefix
    
};