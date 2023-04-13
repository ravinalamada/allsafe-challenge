const fs = require('node:fs');

const countVowelsWithRegex = (mockData) => {
    return mockData.match(/[aeiou]/gi)?.length;
  }

const countVowelsLinear = (filePath) => {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      const vowelCounts = countVowelsWithRegex(data);
      console.log('Linear approach::::::',vowelCounts);
      return vowelCounts;
    } catch (err) {
      throw new Error(`Error reading file: ${err.message}`);
    }
  };

    countVowelsLinear('example.docx')

// Iterative
const vowels = ["a", "e", "i", "o", "u"];

const handleCountVowels = (string) => {
    let vowelCounts = 0;
    for (let char of string.toLowerCase()) {
        if (vowels.includes(char)) {
            vowelCounts++;
        }
    }
    return vowelCounts;
}

const countVowelsIterative = (filePath) => {

    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const vowelCounts = handleCountVowels(data);
        console.log('Iterative approach::::::',vowelCounts);
        return vowelCounts;
      } catch (err) {
        throw new Error(`Error reading file: ${err.message}`);
      }
} 

    countVowelsIterative('example.docx')

// Recursive
const countVowelsRecursive = (string) => {
    if (string.length === 0) {
        return 0;
    }
    const firstChar = string[0].toLowerCase();
    const restOfString = string.slice(1);
    if (vowels.includes(firstChar)) {
        return 1 + countVowelsRecursive(restOfString);
    } else {
        return countVowelsRecursive(restOfString);
    }
}

console.log('recursive approach::::::',countVowelsRecursive('Here comes you task assignment for the little programming task that we would like to talk about tomorrow.'));

module.exports = {
    countVowelsLinear,
    countVowelsIterative,
    countVowelsRecursive
}

/* 
These are the potential pitfalls of the recursive function: 
  - The recursive function consumes a lot of memory because they create a new stack frame for each recursive call. So, if  the recursion depth is very large, 
  the program may run out of memory or cause a stack overflow error. While I was working on it I got this stack overflow error. 
  - The recursive function is slower than the linear function as expected.
  - The recursive function is more difficult to understand. I think this is the biggest drawback to me. 

For the linier program I struggle to see pitfalls.
*/