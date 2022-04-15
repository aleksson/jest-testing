const { generateText } = require('./util');
console.clear();

let testing = {
    name : 'steve',
    age : 45 
};

// Unit test
test('display name and age', () => {
    const generatedText = generateText('steve',45);
    const outputText = `${testing.name} (${testing.age} years old)`;
    expect(generatedText).toBe(outputText);
});

// False Positive Test
test('DONT display name and age', () => {
    const errorInput = generateText('',NaN);
    const strangeOutput = ` (NaN years old)`;
    expect(errorInput).toBe(strangeOutput);
});