import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  isLoggedIn: string ;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.login();
  }

  onLogout(){
    
   localStorage.removeItem("Token");
   localStorage.removeItem("auth-user");
   localStorage.removeItem("user-type");
   this.isLoggedIn = 'false';
   alert("Logout Succesful..");
   this.router.navigateByUrl("/login");
  }

  login(){
    if(localStorage.getItem("Token")){
      this.isLoggedIn = 'true';
    }
    else{
      this.isLoggedIn = 'false';
    }
  }

}
