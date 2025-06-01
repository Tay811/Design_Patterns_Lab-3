import { Project } from "./models/Project";
import { Task } from "./models/Task";
import { Developer } from "./observers/Developer";
import { TaskStatus } from "./enums/TaskStatus";

// Создаем разработчиков
const dev1 = new Developer("Даша");
const dev2 = new Developer("Маша");

// Создаем проект и задачи
const project = new Project("Проект A");
const task1 = new Task("Сделать API");
const task2 = new Task("Написать фронтенд");

// Подписка разработчиков
project.attach(dev1);
task1.attach(dev2);

// Строим иерархию задач корректно
project.add(task1);
project.add(task2);

// ⚠️ Попробуем добавить подзадачу к обычной задаче (task1)
const subTask = new Task("Реализовать авторизацию");

task1.add(subTask); 

// Или удаление (remove тоже можно вызвать)
task1.remove(subTask);

// Статус изменения
project.changeStatus(TaskStatus.InProgress);
task1.changeStatus(TaskStatus.Done);

