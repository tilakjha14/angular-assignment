import { BehaviorSubject, Observable } from 'rxjs';

export class DataService {
  dataSource = new BehaviorSubject<any>('Default String');
  currentData = this.dataSource.asObservable();
  changeData(data: string) {
    this.dataSource.next(data);
  }
  //   dataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(0);
  //   basicValue: Observable<any> = this.dataSubject.asObservable();
  //   increment() {
  //     const currentVal = this.dataSubject.getValue();
  //     this.dataSubject.next(currentVal + 1);
  //   }
}
