import { Account } from './account';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private _httpClient:HttpClient) {}
  getAccounts(){
  return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals');
}
}
