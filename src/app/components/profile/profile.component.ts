import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  user: User = new User();
  constructor(private loginService: LoginService, private router: Router){ }

  ngOnInit(): void {
    this.getUserEmail();
  }

  userEmail: any;

  getUserEmail(){
    const paramValue = localStorage.getItem("auth-user");
    this.userEmail = localStorage.getItem("auth-user");
    this.loginService.getUserDetails(this.userEmail).subscribe((data: any) => {
      this.user = data;
    })
  }

  back(){
    this.router.navigateByUrl("/home");
  }


}
