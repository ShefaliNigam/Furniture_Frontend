import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  submitted = false;
   loginform!: FormGroup;

   user: User = new User();
   
   isLoggedIn: string ;

  constructor(private router: Router,private loginService: LoginService, private  formbuilder: FormBuilder) {
    // this.loginform = new FormGroup({
    //   username: new FormControl('', [Validators.required]),
    //   password: new FormControl('',[Validators.required])
    // })
   }

  ngOnInit(): void {
    this.loginform = this.formbuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]

    })
  }

   

  onsubmit(user: User){
    this.submitted = true;
    if(this.loginform.invalid){
      return;
    }

     this.doLogin(user);
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
