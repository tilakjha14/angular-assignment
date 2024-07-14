import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-set-data',
  templateUrl: './set-data.component.html',
  styleUrl: './set-data.component.css',
  providers: [DataService],
})
export class SetDataComponent {
  newData: string = '';
  // initialVal: number = 0;
  // numberSubscription: any;
  constructor(private dataService: DataService) {}
  onSetData(data: string) {
    this.dataService.changeData(data);
    console.log('newValue=', data);
  }
  // ngOnInit() {
  //   this.numberSubscription = this.dataService.basicValue.subscribe(
  //     (data) => (this.initialVal = data)
  //   );
  // }

  // incrementData() {
  //   this.dataService.increment();
  // }
}
