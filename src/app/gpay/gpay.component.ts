import { HdfcService } from './../hdfc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gpay',
  templateUrl: './gpay.component.html',
  styleUrls: ['./gpay.component.css']
})

export class GpayComponent implements OnInit {

  public amount:number = 0;
  
  constructor(private _hdfcService:HdfcService) { }

  ngOnInit(): void {
  }
  withdraw(){
    this._hdfcService.withdraw(this.amount);
  }
  deposit(){
    this._hdfcService.deposit(this.amount);
  }
  showBalance(){
    alert(this._hdfcService.getBalance());
  }

}
