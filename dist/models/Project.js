"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const BaseTask_1 = require("./BaseTask");
class Project extends BaseTask_1.BaseTask {
    constructor() {
        super(...arguments);
        this.children = [];
    }
    add(task) {
        this.children.push(task);
        this.notifyObservers(`Добавлена новая подзадача: ${task.getName()}`);
    }
    remove(task) {
        this.children = this.children.filter(child => child !== task);
        this.notifyObservers(`Удалена подзадача: ${task.getName()}`);
    }
    changeStatus(status) {
        super.changeStatus(status);
        for (const child of this.children) {
            child.changeStatus(status);
        }
    }
}
exports.Project = Project;
