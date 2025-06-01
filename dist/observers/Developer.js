"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = void 0;
class Developer {
    constructor(name) {
        this.name = name;
    }
    update(message) {
        console.log(`${this.name} получила уведомление: ${message}`);
    }
}
exports.Developer = Developer;
