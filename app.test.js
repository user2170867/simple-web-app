const { multiply } = require('./app');

test('умножение 2 * 3 даёт 6', () => {
  expect(multiply(2, 3)).toBe(6);
});
