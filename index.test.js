const fs = require('node:fs');
const vowelcounts = require('./index.js');
const countVowelLinear = vowelcounts.countVowelsLinear;
const countVowelIterative = vowelcounts.countVowelsIterative;
const countVowelRecursive = vowelcounts.countVowelsRecursive;

describe('vowelCounts', () => {

  beforeEach(() => {
    const mockData = 'Lorem ipsum dOlor sit amet';
    fs.writeFileSync('test.docx', mockData, 'utf8');
  });

  afterEach(() => {
    fs.unlinkSync('test.docx');
  });

  // Linear function test

  it('should count the number of vowels in the file using linear fashion', async () => {
 
    const filePath = 'test.docx';
    const result = countVowelLinear(filePath);
    expect(result).toEqual(9);
  });

  // Iterative function test

  it('should the number of vowels in the file using iterative function', async () => {
 
    const filePath = 'test.docx';
    const result = countVowelIterative(filePath);
    expect(result).toEqual(9);
  });

// recursive function test

  it('should the number of vowels in the file using recursive fuction', async () => {
    const mockData = 'Lorem ipsum dOlor sit amet';
 
    const result = countVowelRecursive(mockData);
    expect(result).toEqual(9);
  });

});