"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculator {
    static add(a, b) {
        return a + b;
    }
    static substract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        if (b === 0) {
            throw new Error('Can not divide by zero');
        }
        return a / b;
    }
}
exports.default = Calculator;
