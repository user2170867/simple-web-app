import { calculate } from './calculator.js';

export function createController(io) {
    return {
        performOperation(operation) {
            const a = io.getA();
            const b = io.getB();
            const result = calculate(operation, a, b);
            io.showResult(result);
        }
    };
}
