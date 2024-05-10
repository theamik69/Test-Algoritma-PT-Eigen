function reverseAlphabet(input) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const splitAlphabet = alphabet.split('').join('');

    let result = '';
    let numberPart = '';

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (/[a-zA-Z]/.test(char)) {
            const index = alphabet.indexOf(char.toLowerCase());
            const reversedChar = index !== -1 ? splitAlphabet[index] : char;
            result = reversedChar.toUpperCase() + result;
        } else if (/\d/.test(char)) {
            numberPart = char + numberPart;
        }
    }

    return result + numberPart;
}

const inputString = "NEGIE1";
const reversedString = reverseAlphabet(inputString);
console.log(reversedString); 
