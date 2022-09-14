import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sqare',
  templateUrl: './sqare.component.html',
  styleUrls: ['./sqare.component.css']
})
export class SqareComponent implements OnInit {
  public number1: number = 0;
  public result: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  area(){
  this.result = this.number1 * this.number1;
  }
  perimeter(){
    this.result = this.number1 * 4;
  }

}


