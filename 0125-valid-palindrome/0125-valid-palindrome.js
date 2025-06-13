/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    
    const reversedStr = cleanStr.split('').reverse().join('');

    return cleanStr === reversedStr;
};


console.log(isPalindrome("a man, a plan, a canal: Panama")); 