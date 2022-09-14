import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css'],
})
export class CreateuserComponent implements OnInit {
  public userForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(120),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.min(1000000000),
      Validators.max(9999999999),
    ]),
    address: new FormGroup({
      state: new FormControl(),
      pin: new FormControl('', [
        Validators.required,
        Validators.min(100000),
        Validators.max(999999),
      ]),
    }),
    cards: new FormArray([]),
    paymentType: new FormControl(),
    upiId: new FormControl(),
    cardNo: new FormControl()
  });
  get cardsFormArray() {
    return this.userForm.get('cards') as FormArray;
  }

  constructor() {}

  ngOnInit(): void {}
  add() {
    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl(),
        expiry: new FormControl(),
        cvv: new FormControl('', [
          Validators.required,
          Validators.min(100),
          Validators.max(999),
        ]),
      })
    );
  }
  remove(i: number) {
    this.cardsFormArray.removeAt(i);
  }

  submit() {
    this.userForm.markAllAsTouched();
    console.log(this.userForm.value);
  }
}
