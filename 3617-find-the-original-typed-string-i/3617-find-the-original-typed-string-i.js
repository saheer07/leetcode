/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let count = 1; 

    for (let i = 1; i < word.length; i++) {
        let repeatCount = 1;

        while (i < word.length && word[i] === word[i - 1]) {
            repeatCount++;
            i++;
        }

        if (repeatCount > 1) {
            count += repeatCount - 1;
        }
    }

    return count;
};
