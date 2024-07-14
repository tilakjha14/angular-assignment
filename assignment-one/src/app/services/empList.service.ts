export class EmpList {
  list: any[] = [
    { id: 'E1', name: 'Employee 1', empType: 'Full Time' },
    { id: 'E2', name: 'Employee 2', empType: 'Full Time' },
    { id: 'E3', name: 'Employee 3', empType: 'Full Time' },
    { id: 'E4', name: 'Employee 4', empType: 'Full Time' },
    { id: 'E4', name: 'Employee 5', empType: 'Full Time' },
  ];
  displayList(): any[] {
    return this.list;
  }
}
