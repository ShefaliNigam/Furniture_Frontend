import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(private router: Router, private loginService: LoginService, private formBuilder: FormBuilder) { }
  isLoggedIn: string ;


  ngOnInit(): void {
    
  }



  doLogin(user: User){
    this.loginService.doAuth(user).subscribe((data:any)=>{
      this.user=data;
      console.log(data);
      // if(data!=null){
      //   localStorage.setItem("Token", data);
      //   localStorage.setItem("auth-user", user.userEmail);
      //   localStorage.setItem("user-type", user.userRole);
      //   alert("Logged In Successfully");
      //   this.router.navigateByUrl("/home");
      //   this.isLoggedIn = 'true';
      // }
      // else{
      //   alert("Authentication Failed please check your credentials");
      //   this.router.navigateByUrl("/error");
      // }
      if(data == null || data == "Wrong Password" || data == "Incorrect UserName and Password"){
        alert("Authentication Failed please check your credentials");
        this.router.navigateByUrl("/error");
      }
      else if(data != null ){
        localStorage.setItem("Token", data);
        localStorage.setItem("auth-user", user.userEmail);
        localStorage.setItem("user-type", user.userRole);
        alert("Logged In Successfully");
        this.router.navigateByUrl("/home");
        this.isLoggedIn = 'true';
      }

    })

  }

  cancel(){
    this.router.navigateByUrl("/home")
  }

}
