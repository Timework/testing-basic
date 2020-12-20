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

module.exports = { 
    capitalize, 
    reverseString,
    calculator,
};