"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const BaseTask_1 = require("./BaseTask");
class Task extends BaseTask_1.BaseTask {
    add(task) {
        console.log("Нельзя добавить подзадачу к обычной задаче");
    }
    remove(task) {
        console.log("Нельзя удалить подзадачу из обычной задачи");
    }
}
exports.Task = Task;
