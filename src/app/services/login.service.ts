import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { __param } from 'tslib';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  doAuth(user: User){
    return this.http.post("http://localhost:7001/token", user, {responseType: "text"});
  }

  doAdd(user: User){
    return this.http.post("http://localhost:7001/user/add", user,{responseType: "text"});
  }

  getUserDetails(paramValue: string){
   

    const token = localStorage.getItem("Token");
    const email = localStorage.getItem("auth-user");
    const header=new HttpHeaders({"Authorization":"Bearer "+token});
    return this.http.get(`http://localhost:7001/user/email/?email=${paramValue}`,{headers: header}  )
  }
  
}
