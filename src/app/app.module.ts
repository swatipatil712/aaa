import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee/employee.component';
import { Employee1Component } from './Employee1/employee1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './Student/student.component';
import { StudentService } from './Student/student.service';
import { HomeComponent } from './routing/home.component';
import { LandingComponent } from './routing/landing.component';
import { AboutComponent } from './routing/about.component';
import { ContactComponent } from './routing/contact.component';
import { RouterModule } from '@angular/router';
import { myRoute } from './routing/route.config';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    Employee1Component,
    StudentComponent,
    HomeComponent,
    LandingComponent,
    AboutComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute)

  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
