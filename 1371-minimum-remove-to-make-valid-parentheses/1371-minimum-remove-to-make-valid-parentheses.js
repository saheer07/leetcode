/**
 * @param {string} s
 * @return {string}
 */
function minRemoveToMakeValid(s) {
  const stack = [];
  const removeSet = new Set();

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === '(') {
      stack.push(i);
    } else if (ch === ')') {
      if (stack.length === 0) {
        removeSet.add(i); 
      } else {
        stack.pop(); 
      }
    }
  }

 
  for (const i of stack) {
    removeSet.add(i);
  }


  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (!removeSet.has(i)) {
      result += s[i];
    }
  }

  return result;
}
