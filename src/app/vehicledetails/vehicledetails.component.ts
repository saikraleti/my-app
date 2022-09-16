import { VehicleService } from './../vehicle.service';
import { Vehicle } from './../vehicle';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicledetails',
  templateUrl: './vehicledetails.component.html',
  styleUrls: ['./vehicledetails.component.css']
})
export class VehicledetailsComponent implements OnInit {
  public vehicle:Vehicle = <Vehicle>{};

  constructor(private _vehicleService:VehicleService, private _activatedRoute:ActivatedRoute) { 

    this._activatedRoute.params.subscribe(
      (data:any)=>{
        this.getVehicle(data.id);
      }
    )
  }

  ngOnInit(): void {
  }
  getVehicle(id:string){
    this._vehicleService.getVehicle(id).subscribe(
      (data:any)=>{
        this.vehicle = data;
      }
    )

  }

}
