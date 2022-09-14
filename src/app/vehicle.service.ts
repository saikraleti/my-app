import { Vehicle } from './vehicle';
import{HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {


  constructor(private _httpClient: HttpClient) {} 

  getVehicles():Observable<Vehicle[]>{
   return this._httpClient.get<Vehicle[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page=1'); 
  }
  getFilteredVehicles(filterTerm:string){
    return this._httpClient.get<Vehicle>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?filter='+filterTerm
    );
  }
  getSortedVehicles(column:string,order:string){
    return this._httpClient.get<Vehicle[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?sortBy='+column+'&order='+order
      );
  }
  createVehicle(vehicle :Vehicle):Observable<Vehicle>{
    return this._httpClient.post<Vehicle>(
            'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction', vehicle
    );

    
  }
  getPagedVehicles(pageNo:number):Observable<Vehicle[]>{
    return this._httpClient.get<Vehicle[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?limit=10&page='+pageNo
    );
  }
    
  deleteVehicles(id:string):Observable<any>{
    return this._httpClient.delete<Vehicle>(
     'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'/'+id 
    );
    
  }
  




}
