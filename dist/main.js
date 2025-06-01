"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Project_1 = require("./models/Project");
const Task_1 = require("./models/Task");
const Developer_1 = require("./observers/Developer");
const TaskStatus_1 = require("./enums/TaskStatus");
// Создаем разработчиков
const dev1 = new Developer_1.Developer("Даша");
const dev2 = new Developer_1.Developer("Маша");
// Создаем проект и задачи
const project = new Project_1.Project("Проект A");
const task1 = new Task_1.Task("Сделать API");
const task2 = new Task_1.Task("Написать фронтенд");
// Подписка разработчиков
project.attach(dev1);
task1.attach(dev2);
// Строим иерархию задач корректно
project.add(task1);
project.add(task2);
// ⚠️ Попробуем добавить подзадачу к обычной задаче (task1)
const subTask = new Task_1.Task("Реализовать авторизацию");
task1.add(subTask); // <-- тут вылезет console.log!
// Или удаление (remove тоже можно вызвать)
task1.remove(subTask);
// Статус изменения
project.changeStatus(TaskStatus_1.TaskStatus.InProgress);
task1.changeStatus(TaskStatus_1.TaskStatus.Done);
