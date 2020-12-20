const { TestScheduler } = require('jest');

const rewire = require('rewire');
const capitalize = rewire('./files').__get__("capitalize");
const reverseString = rewire('./files').__get__("reverseString");
const calculator = rewire("./files").__get__("calculator");
const cipher = rewire("./files").__get__("cipher");
const analyze = rewire("./files").__get__("analyze");
const testObj = analyze([1,8,3,4,2,6]);

test('capitalizes the first letter of a word', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('calculator can add', () => {
    expect(calculator.add(7, 8)).toBe(15);
});

test('calculator can subtract', () => {
    expect(calculator.subtract(12, 5)).toBe(7);
});

test('calculator can multiply', () => {
    expect(calculator.multiply(7, 12)).toBe(84);
});

test("calculator can divide", () => {
    expect(calculator.divide(100, 10)).toBe(10);
});

test("cipher works", () => {
    expect(cipher("this is a caesar cipher", 7)).toBe("aopz pz h jhlzhy jpwoly");
});

test("cipher works with symbols", () => {
    expect(cipher("this is a caesar cipher!@#", 7)).toBe("aopz pz h jhlzhy jpwoly!@#");
});

test("cipher works with capital letters", () => {
    expect(cipher("This Is A Caesar Cipher", 7)).toBe("Aopz Pz H Jhlzhy Jpwoly");
});

test("analyze gives average", () => {
    expect(testObj['average']).toBe(4);
});

test("analyze gives max", () => {
    expect(testObj['max']).toBe(8);
});

test("analyze gives min", () => {
    expect(testObj['min']).toBe(1);
});

test("analyze gives length", () => {
    expect(testObj['length']).toBe(6);
});