import { Employees } from './../employees';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  public name: string = '';
  public company: string = '';
  public age: number = 0;
  public package: number = 0;

  public employees: Employees[] = [];
  constructor() {}

  ngOnInit(): void {}

  register() {
    this.employees.push({
      'name': this.name,
      'age': this.age,
      'company': this.company,
      'package': this.package,
    });
  }
  delete(i: number) {
    this.employees.splice(i, 1);
  }
   deleteAll() {
    this.employees = [];
   }
  
  packageLowToHigh() {
    this.employees = this.employees.sort((a, b) => a.package - b.package);
  }
  packageHighToLow() {
    this.employees = this.employees.sort((a, b) => b.package - a.package);
  }
}
