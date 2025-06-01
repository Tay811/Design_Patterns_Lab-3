import { BaseTask } from "./BaseTask";
import { TaskComponent } from "./TaskComponent";

export class Task extends BaseTask {
    add(task: TaskComponent): void {
        console.log("Нельзя добавить подзадачу к обычной задаче");
    }

    remove(task: TaskComponent): void {
        console.log("Нельзя удалить подзадачу из обычной задачи");
    }
}
