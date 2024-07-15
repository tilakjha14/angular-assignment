import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-task-confirm-dialog',
  templateUrl: './task-confirm-dialog.component.html',
  styleUrls: ['./task-confirm-dialog.component.css'],
})
export class TaskConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TaskConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
