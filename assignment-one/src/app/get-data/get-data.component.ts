import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrl: './get-data.component.css',
  providers: [DataService],
})
export class GetDataComponent implements OnInit {
  receivedData: any;
  // initialVal: number = 0;
  // numberSubscription: any;
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.currentData.subscribe(
      (data) => (
        (this.receivedData = data), console.log('received data=', data)
      )
    );
  }

  //   ngOnInit(): void {
  //     this.numberSubscription = this.dataService.basicValue.subscribe(
  //       (data) => (this.initialVal = data)
  //     );
  //   }
}
