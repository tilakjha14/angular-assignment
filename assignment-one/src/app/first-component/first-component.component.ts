import { Component, OnInit } from '@angular/core';
import { EmpList } from '../services/empList.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css',
  providers: [EmpList],
})
export class FirstComponentComponent implements OnInit {
  list: any[] = [];
  constructor(private listService: EmpList) {}

  ngOnInit(): void {
    this.list = this.listService.displayList();
  }
}
