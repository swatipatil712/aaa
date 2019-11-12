import { Component } from "@angular/core";


@Component({
    selector:'app-employee1',
    templateUrl:'/employee1.component.html'
})
export class Employee1Component{
    title:string="Create Employee Form"

    public saveEmployee(data:any)
    {
        alert(JSON.stringify(data));
        console.log(data);
    }
}