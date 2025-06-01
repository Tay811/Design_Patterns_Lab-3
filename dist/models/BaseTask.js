"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseTask = void 0;
const TaskStatus_1 = require("../enums/TaskStatus");
class BaseTask {
    constructor(name) {
        this.name = name;
        this.observers = [];
        this.status = TaskStatus_1.TaskStatus.Todo;
    }
    attach(observer) {
        this.observers.push(observer);
    }
    detach(observer) {
        this.observers = this.observers.filter(o => o !== observer);
    }
    notifyObservers(message) {
        for (const observer of this.observers) {
            observer.update(`${this.name}: ${message}`);
        }
    }
    getName() {
        return this.name;
    }
    changeStatus(status) {
        this.status = status;
        this.notifyObservers(`Статус изменен на ${status}`);
    }
}
exports.BaseTask = BaseTask;
