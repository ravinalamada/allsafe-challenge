const fs = require('node:fs');
const vowelcounts = require('./index.js');
const countVowelRecursive = vowelcounts.countVowelsRecursive;

// linear
const countVowelsLinear = () => {
    fs.readFile('example.docx', 'utf8', (err, data) => {
        if (err) throw err;
        const result = data.match(/[aeiou]/gi).length;    
        // console.log(`Literal approach. Count: ${result}`)
    }); 
}

countVowelsLinear()

// performance check
const iterations = 10000;
const startLinear = performance.now();
for (let i = 0; i < iterations; i++) {
    countVowelsLinear();
}
const endLinear = performance.now();
const totTimeLinear = endLinear - startLinear;

const startRecursive = performance.now();
for (let i = 0; i < iterations; i++) {
    countVowelRecursive("Here comes you task assignment for the little programming task that we would like to talk about tomorrow.");
}
const endRecursive = performance.now();
const totTimeRecursive = endRecursive - startRecursive;

if (totTimeLinear < totTimeRecursive) {
    const difference = totTimeRecursive - totTimeLinear
    console.log(`Linear solution is faster than recursive of ${difference.toFixed(4)}, 
    linear being ${totTimeLinear.toFixed(4)} milliseconds 
    and recursive being ${totTimeRecursive.toFixed(4)} milliseconds`)
} else if (totTimeLinear > totTimeRecursive) {
    const difference = totTimeLinear - totTimeRecursive
    console.log(`Recursive solution is faster than linear of ${difference.toFixed(4)}, 
    recursive being ${totTimeRecursive.toFixed(4)} milliseconds 
    and linear being ${totTimeLinear.toFixed(4)} milliseconds`)
} else {
    console.log(`Both solutions are equal, wheres 
    recursive takes ${totTimeRecursive.toFixed(4)} milliseconds 
    and linear takes ${totTimeLinear.toFixed(4)} milliseconds`) 
}