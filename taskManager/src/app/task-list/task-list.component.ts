import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { TaskConfirmDialogComponent } from '../task-confirm-dialog/task-confirm-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  showCompletedTasks: boolean = false;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.filteredTasks = this.tasks;
  }

  toggleCompletedTasks(): void {
    this.showCompletedTasks = !this.showCompletedTasks;
    this.filterTasks();
  }

  filterTasks(searchTerm: string = ''): void {
    this.filteredTasks = this.tasks.filter(
      (task) =>
        task.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (this.showCompletedTasks || !task.completed)
    );
  }

  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.filterTasks(target.value);
  }

  confirmDeleteTask(taskId: number): void {
    const dialogRef = this.dialog.open(TaskConfirmDialogComponent, {
      width: '250px',
      data: { id: taskId },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.taskService.deleteTask(taskId);
        this.tasks = this.taskService.getTasks();
        this.filterTasks();
      }
    });
  }

  editTask(taskId: number): void {
    this.router.navigate(['/tasks/edit', taskId]);
  }
}
