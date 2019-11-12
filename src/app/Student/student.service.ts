import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable()

export class StudentService{
    public UsersData:any
    constructor(private http:HttpClient){}
    public saveData(data)
    {
        this.http.post("https://https://reqres.in/api/users",data)
        .subscribe(res=>{this.UsersData=res}, error=>{this.UsersData=error})
        return this.UsersData
    }
    
}