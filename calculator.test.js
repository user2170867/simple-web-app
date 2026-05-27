import { calculate } from './calculator.js';

test('умножение 2*3=6', () => {
    expect(calculate('multiply', 2, 3)).toBe(6);
});

test('сложение 2+3=5', () => {
    expect(calculate('add', 2, 3)).toBe(5);
});

test('деление 6/2=3', () => {
    expect(calculate('divide', 6, 2)).toBe(3);
});
