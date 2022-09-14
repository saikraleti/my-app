import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    public admins: Admin[] =[];

  constructor(private _adminService: AdminService){

    this._adminService.getAdmins().subscribe(
      (data:any) =>{
        this.admins = data;
      },
      (err:any) => {
        alert('internal server error');
      }
    );

   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

