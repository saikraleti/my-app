import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpClient:HttpClient) { }
  login(data:any): Observable<any>{
    return this._httpClient.post<any>(
   'https://reqres.in/api/login' , data
  );
}
}
