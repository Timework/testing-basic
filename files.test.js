const { TestScheduler } = require('jest');

const rewire = require('rewire');
const capitalize = rewire('./files').__get__("capitalize");
const reverseString = rewire('./files').__get__("reverseString");
const calculator = rewire("./files").__get__("calculator");

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