import { CreateuserComponent } from './createuser/createuser.component';
import { NotifyGuard } from './notify.guard';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { AdminComponent } from './admin/admin.component';
import { ItemComponent } from './item/item.component';
import { AccountComponent } from './account/account.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { GpayComponent } from './gpay/gpay.component';
import { CarsComponent } from './cars/cars.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeesComponent } from './employees/employees.component';
import { CartComponent } from './cart/cart.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SqareComponent } from './sqare/sqare.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path:'login',component:LoginComponent},
  {path: 'dashboard',component: DashboardComponent,canActivate:[AuthGuard],children: [
  { path: 'home', component: HomeComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'square', component: SqareComponent },
  { path: 'databinding', component: DataBindingComponent },
  { path: 'eventbinding', component: EventbindingComponent },
  { path: 'twowaybinding', component: TwowaybindingComponent},
  { path: 'rectangle', component: RectangleComponent},
  { path: 'event-registration', component: EventRegistrationComponent},
  { path: 'student-registration', component: StudentRegistrationComponent},
  { path: 'cart',component :CartComponent},
  { path: 'employee',component :EmployeesComponent},
  {path: 'employees',component :EmployeesComponent},
  { path :'pipes',component :PipesComponent},
  { path: 'cars',component :CarsComponent},
  {path:'gpay',component :GpayComponent},
  { path:'vehicle',component:VehicleComponent},
  { path: 'account',component:AccountComponent},
  { path:'item',component:ItemComponent},
  { path: 'admin',component:AdminComponent},
  { path: 'createuser',component:CreateuserComponent},
  { path:'createvehicle',component:CreatevehicleComponent,canDeactivate:[NotifyGuard]},
],
  },
  { path: '', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
