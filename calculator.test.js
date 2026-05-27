const { calculate } = require('./calculator.js');

test('multiply 2*3 = 6', () => {
  expect(calculate('multiply', 2, 3)).toBe(6);
});

test('add 2+3 = 5', () => {
  expect(calculate('add', 2, 3)).toBe(5);
});
