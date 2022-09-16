import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SqareComponent } from './sqare/sqare.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { CartComponent } from './cart/cart.component';
import { EmployeesComponent } from './employees/employees.component';
import { PipesComponent } from './pipes/pipes.component';
import { PricePipe } from './price.pipe';
import { PackagePipe } from './package.pipe';
import { AgePipe } from './age.pipe';
import { CarsComponent } from './cars/cars.component';
import { GpayComponent } from './gpay/gpay.component';
import { HighlightDirective } from './highlight.directive';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './account/account.component';
import { ItemComponent } from './item/item.component';
import { AdminComponent } from './admin/admin.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { StarComponent } from './star/star.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    CalculatorComponent,
    SqareComponent,
    DataBindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    RectangleComponent,
    EventRegistrationComponent,
    StudentRegistrationComponent,
    CartComponent,
    EmployeesComponent,
    PipesComponent,
    PricePipe,
    PackagePipe,
    AgePipe,
    CarsComponent,
    GpayComponent,
    HighlightDirective,
    VehicleComponent,
    AccountComponent,
    ItemComponent,
    AdminComponent,
    CreatevehicleComponent,
    CreateuserComponent,
    ParentComponent,
    ChildComponent,
    StarComponent,
    CartlistComponent,
    NavComponent,
    ProductComponent,
    VehicledetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
