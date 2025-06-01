import { BaseTask } from "./BaseTask";
import { TaskComponent } from "./TaskComponent";
import { TaskStatus } from "../enums/TaskStatus";

export class Project extends BaseTask {
    private children: TaskComponent[] = [];

    add(task: TaskComponent): void {
        this.children.push(task);
        this.notifyObservers(`Добавлена новая подзадача: ${task.getName()}`);
    }

    remove(task: TaskComponent): void {
        this.children = this.children.filter(child => child !== task);
        this.notifyObservers(`Удалена подзадача: ${task.getName()}`);
    }

    changeStatus(status: TaskStatus): void {
        super.changeStatus(status);
        for (const child of this.children) {
            child.changeStatus(status);
        }
    }
}
