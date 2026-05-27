export function getInputValue(id) {
    const element = document.getElementById(id);
    return element ? parseFloat(element.value) || 0 : 0;
}

export function setResultText(text) {
    const resultElement = document.getElementById('result');
    if (resultElement) resultElement.innerText = text;
}
