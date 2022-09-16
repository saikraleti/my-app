import { Router } from '@angular/router';
import { VehicleService } from './../vehicle.service';
import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  public column: string = "";
  public order: string = "";
  public filterTerm:string = "";
  public vehicles: Vehicle[] = []

  constructor(private _VehicleService: VehicleService,private router:Router) {

    this._VehicleService.getVehicles().subscribe(
    
      (data:any) => {
        this.vehicles = data;
      },
      (err:any) =>{
        alert('internal server error');
      }
    )
   }

  ngOnInit(): void {
  }
  filter(){
    this._VehicleService.getFilteredVehicles(this.filterTerm).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert('internal server error');
      }
    )
  }
  sort(){
    this._VehicleService.getSortedVehicles(this.column, this.order).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert('internal server error');
      }
    )
  }
  page(pageN0:number){
    this._VehicleService.getPagedVehicles(pageN0).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert('internal server error');
      }
    );
  }
  
  delete(id:string){
    this._VehicleService.deleteVehicles(id).subscribe(
      (data:any) => {
        alert("deleted successfully!!!!");
        location.reload();
      },
      (err:any) => {
        alert('internal server error');
      }
    )
  }
  view(id:string){

    this.router.navigateByUrl('/dashboard/vehicledetails'+'/'+id);
}
}
