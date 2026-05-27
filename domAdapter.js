import { InputOutput } from './interfaces.js';

export class DOMInputOutput extends InputOutput {
    getA() {
        return parseFloat(document.getElementById('a')?.value) || 0;
    }
    getB() {
        return parseFloat(document.getElementById('b')?.value) || 0;
    }
    showResult(value) {
        const el = document.getElementById('result');
        if (el) el.innerText = value;
    }
}
