import { TaskComponent } from "./TaskComponent";
import { TaskStatus } from "../enums/TaskStatus";
import { Observer } from "../observers/Observer";

export abstract class BaseTask implements TaskComponent {
    protected observers: Observer[] = [];
    protected status: TaskStatus = TaskStatus.Todo;

    constructor(protected name: string) {}

    attach(observer: Observer): void {
        this.observers.push(observer);
    }

    detach(observer: Observer): void {
        this.observers = this.observers.filter(o => o !== observer);
    }

    notifyObservers(message: string): void {
        for (const observer of this.observers) {
            observer.update(`${this.name}: ${message}`);
        }
    }

    abstract add(task: TaskComponent): void;
    abstract remove(task: TaskComponent): void;

    getName(): string {
        return this.name;
    }

    changeStatus(status: TaskStatus): void {
        this.status = status;
        this.notifyObservers(`Статус изменен на ${status}`);
    }
}
