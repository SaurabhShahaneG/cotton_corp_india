import { Component } from '@angular/core';
import { loginService } from 'src/service/loginService';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public loggedIn = false;
 

  constructor(private loginServ : loginService) { }

  ngOnInit(): void {
    console.log("before setting logged in ", this.loggedIn);
     this.loggedIn=this.loginServ.isLoggedIn();
     console.log("after setting logged in ", this.loggedIn);

  }

  logoutUser(){
     this.loginServ.logout();
     location.reload();
    
  }

  passValue(value : string){
    console.log(value);
   
  }
}
