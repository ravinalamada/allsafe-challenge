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