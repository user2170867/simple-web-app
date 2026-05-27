const operations = {
    multiply: (a, b) => a * b,
    add: (a, b) => a + b,
    divide: (a, b) => a / b
};

function calculate(operation, a, b) {
    const fn = operations[operation];
    if (!fn) throw new Error(`Unknown operation: ${operation}`);
    return fn(a, b);
}

module.exports = { calculate, operations };
