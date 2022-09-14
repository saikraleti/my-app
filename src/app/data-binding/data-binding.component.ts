import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Student } from '../student';
import { User } from '../user';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  public age: number = 22;
  public name: string = 'lakshman';
  public isindian: boolean = true;
  //ARRAY INTERPOLATION:-
  public phones: number[] = [9964, 1463, 222];
  public courses: string[] = ['angular', 'react'];
  //OBJECT INTERPOLATION;-<BUT USER> IS NOT THERE
  public user: User = { name: 'lakshman', city: 'india' };

  public student: Student = { name: 'lakshman', id: 'N123', marks: 99 };

  public Employee: Employee = {
    name: 'lakshman',
    company: 'google',
    package: 14,
  };

  //Array of objects interpolation
  public users: User[] = [
    { name: 'lakshman', city: 'tirupati' },
    { name: 'sai', city: 'Hyderabad' },
    { name: 'vishnu', city: 'kadapa' },
  ];

  public students: Student[] = [
    { name: 'lakshman', id: 'n124', marks: 99 },
    { name: 'sai', id: 'n125', marks: 99 },
    { name: 'vishnu', id: 'n126', marks: 99 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
