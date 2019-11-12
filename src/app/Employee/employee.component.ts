import { Component } from "@angular/core";


@Component({
    selector: 'app-employee',
    templateUrl :'./employee.component.html'    
})
export class EmployeeComponent{

   title:string='Welcome to Assimilate';
   firstName:string="Assimilate";
   lastName:string="Technology";
   id:string="1"
   name:string="swati";
   gender:string="female";

   employees:any[]=[
       {id:1,name:'swati',gender:'female', salary:"2000"},
       {id:2,name:'Pranoti',gender:'female', salary:"2200"}
   ]
   
   
   getFullName(): String
   {
       return this.firstName+"" +this.lastName;
   }



}