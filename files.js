// capitalizes a word
function capitalize(word) {
    const letter = word.split("");
    let answer = [];
    for (let i=0; i <= letter.length; i++){
        if (i===0){
            answer.push(letter[i].toUpperCase());
        } else {
            answer.push(letter[i]);
        };
    };
    return answer.join("");
};

// reverses a string
function reverseString(word) {
    const letter = word.split("");
    let answer = [];
    for (let i=0; i <= letter.length; i++){
        answer.unshift(letter[i]);
    };
    return answer.join("");
}

// calculator with add, subtract, multiply, divide function
const calculator = {
    add : (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2,

}

// this is a caesar cipher
function cipher(word, num) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letters = word.split("");
    let answer = [];
    for (let i=0; i <= letters.length; i++){
        if (capital.includes(letters[i])) {
            let proxy = capital.indexOf(letters[i]) + num;
            while (proxy >= capital.length){
                proxy -= capital.length;
            };
            answer.push(capital[proxy]);
        } else if (alphabet.includes(letters[i])){
            let proxy = alphabet.indexOf(letters[i]) + num;
            while (proxy >= alphabet.length){
                proxy -= alphabet.length;
            };
            answer.push(alphabet[proxy]);
        } else {
            answer.push(letters[i]);
        };

    };
    return answer.join("");
};

module.exports = { 
    capitalize, 
    reverseString,
    calculator,
    cipher,
};