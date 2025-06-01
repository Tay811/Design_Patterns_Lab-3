import { TaskStatus } from "../enums/TaskStatus";
import { Observer } from "../observers/Observer";

export interface TaskComponent {
    add(task: TaskComponent): void;
    remove(task: TaskComponent): void;
    getName(): string;
    changeStatus(status: TaskStatus): void;
    notifyObservers(message: string): void;
    attach(observer: Observer): void;
    detach(observer: Observer): void;
}