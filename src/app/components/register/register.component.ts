import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { Router, Route } from '@angular/router';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;
   registerform: FormGroup | any

   user: User = new User();
   user2 : User = new User();

  constructor( private router: Router, private loginService: LoginService) {
    this.registerform =  new FormGroup({
      // yourname: new FormControl('',[Validators.required]),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)]),
      mobile: new FormControl('',[Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      role: new FormControl('', [Validators.required])
      
    })
   }

  ngOnInit(): void {
  }

  onSubmit(data: any){
    
   
    this.submitted = true;
    if(!this.registerform.valid){
      return;
    }
    
    // this.user2.userId = 12;
    this.user2.userName = data.value.name;
    this.user2.userEmail = data.value.email;
    this.user2.userPassword = data.value.password;
    this.user2.userMobile = data.value.mobile;
    this.user2.userRole = data.value.role;
    console.log(this.user2);
    this.loginService.doAdd(this.user2).subscribe((data : any)=> {
      this.user = data;
      console.log(this.user2);
    });
    this.router.navigate(['login'])
    // user.userRole = "CUSTOMER";

    
  }

}
