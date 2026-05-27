function multiply(a, b) {
  return a * b;
}

function calculate() {
  const a = parseFloat(document.getElementById('a').value) || 0;
  const b = parseFloat(document.getElementById('b').value) || 0;
  const result = multiply(a, b);
  document.getElementById('result').innerText = result;
}

// Экспорт для тестов (Node.js)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { multiply };
}
