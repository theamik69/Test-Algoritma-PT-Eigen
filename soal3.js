function countWord(input, query) {
    const occurrences = {};
    for (const word of input) {
        occurrences[word] = (occurrences[word] || 0) + 1;
    }
    
    const result = [];
    
    for (const word of query) {
        result.push(occurrences[word] || 0);
    }
    
    return result;
}

const INPUT = ['xc', 'dz', 'bbb', 'dz', 'ac', 'bbb'];
const QUERY = ['bbb', 'ac', 'dz', 'xx'];
const output = countWord(INPUT, QUERY);
console.log(output); 
