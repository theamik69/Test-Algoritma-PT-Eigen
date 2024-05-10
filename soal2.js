function longest(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    
    return longestWord;
}

const sentence = "Saya sangat senang mengerjakan soal algoritmaaaaaa";
const longestWord = longest(sentence);
console.log(longestWord + ": " + longestWord.length + " character");
