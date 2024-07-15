import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private storageKey = 'tasks';

  constructor() {
    this.initializeTasks();
  }

  initializeTasks(): void {
    if (!localStorage.getItem(this.storageKey)) {
      const defaultTasks: Task[] = [
        {
          id: 1,
          name: 'Task 1',
          dueDate: new Date(),
          priority: 'High',
          notes: 'Note 1',
          completed: false,
        },
        {
          id: 2,
          name: 'Task 2',
          dueDate: new Date(),
          priority: 'Medium',
          notes: 'Note 2',
          completed: true,
        },
      ];
      localStorage.setItem(this.storageKey, JSON.stringify(defaultTasks));
    }
  }

  getTasks(): Task[] {
    const tasksJson = localStorage.getItem(this.storageKey);
    return tasksJson ? JSON.parse(tasksJson) : [];
  }

  saveTask(task: Task): void {
    const tasks = this.getTasks();
    if (task.id) {
      const index = tasks.findIndex((t) => t.id === task.id);
      if (index !== -1) {
        tasks[index] = task;
      } else {
        tasks.push(task);
      }
    } else {
      task.id = new Date().getTime();
      tasks.push(task);
    }
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  deleteTask(taskId: number): void {
    const tasks = this.getTasks().filter((task) => task.id !== taskId);
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }
}
