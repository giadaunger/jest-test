const { default: expect } = require('expect');
const subtract = require('./subtract');

test('properly subtracting two numbers', () => {
    expect(subtract(1, 2)).toBe(-1)
})