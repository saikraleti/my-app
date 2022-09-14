import { VehicleService } from './../vehicle.service';
import { Vehicle } from './../vehicle';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css'],
})
export class CreatevehicleComponent implements OnInit {
  [x: string]: any;
  public VehicleForm: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    Type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl()
  });

  constructor(private _vehicleservice:VehicleService) {}

  ngOnInit(): void {
  }
  submit(){
    console.log(this.VehicleForm.value);
    
    this._vehicleservice.createVehicle(this.VehicleForm.value)
      .subscribe((date: any) => {
        alert('created successfully');
      });
  }

   
    }
  
