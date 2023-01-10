import { Roles } from './../../models/Roles';
import { UserService } from 'src/service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/User';


@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css']
})
export class RoleManagementComponent implements OnInit{
  response : Roles[];
  roles :any;
  userForm : FormGroup;
  user : User;
  constructor(private userService : UserService, private fb : FormBuilder){}
  ngOnInit(): void {


    console.log('Method not implemented.');
    this.userService.getRoles().subscribe({
      next: (v) =>{
        console.log("this is next v in role-management data is --",v);
        this.response = v;
        console.log("Now the response is :---------", this.response);


    },
      error: (e) => console.error("this is the error in role-management ---",e),
      complete: () => {
        console.info("this is the complete in role-management ---",'complete');

      }
  });
  this.user = JSON.parse(JSON.stringify(sessionStorage.getItem('userObject')));
  console.log("user ::::::-----", this.user);
  this.userForm = this.fb.group({
    userId :this.user.userId,
    userName: [''],
    userFirstName : [''],
    userLastName :[''],
    email :[''],
    userPassword : [''],
    role : this.response
  }

  );


  }

  onSubmit(){
    console.log("Credentials :0000 :");
    console.log("cccccccccccccccccc", this.userForm.value);
  }

}
