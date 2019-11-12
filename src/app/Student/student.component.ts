import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from './student.service';
@Component({
    selector: 'app-student',
    templateUrl: './student.component.html'
})
export class StudentComponent{
    title:string='Student Registration Form'
    public studentModel:FormGroup
     public StudInfo: any
    constructor(private stud:StudentService ){
        this.studentModel= new FormGroup({
            Name: new FormControl('', [Validators.required]),
            Email:new FormControl('')
        })
    }
    public saveStudent(data:any){
        this.StudInfo=this.stud.UsersData(data);
        alert(JSON.stringify(data))
    }
}