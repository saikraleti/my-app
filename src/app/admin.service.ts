import { observable, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Admin } from './admin';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  

  constructor(private _httpClient: HttpClient){}
  getAdmins():Observable<Admin[]>{
    return this._httpClient.get<Admin[]>(
      'https://jsonplaceholder.typicode.com/users');
    
    }

}