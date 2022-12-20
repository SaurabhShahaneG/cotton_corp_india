import { Component } from '@angular/core';
import { loginService } from 'src/service/loginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credentials = {
    "userName": '',
    "userPassword": ''
  }
  constructor(private loginService:loginService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    
    if((this.credentials.userName!='' && this.credentials.userPassword!='') && (this.credentials.userName!=null && this.credentials.userPassword!=null)){
      console.log("Ouput is submitted");
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any) => {
          console.log("response token after login :-",response.jwtToken);
          sessionStorage.setItem("jwtToken",response.jwtToken);
          console.log("token set in session storage:---", sessionStorage.getItem("jwtToken"))
          window.location.href="/";
          alert("Welcome CCI "+this.credentials.userName);
        },
        error => {
          console.log("getting errorrr")
          console.log(error);
        }

      )
      //generate token
    }else{
      console.log("values are empty")
    }
  }
}
