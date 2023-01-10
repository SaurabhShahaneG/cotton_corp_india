import { User } from 'src/app/models/User';
import { UserService } from 'src/service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users : any;
  constructor(private router: Router, private userService : UserService){

  }
  ngOnInit(): void {
    console.log('In list-users component. Init Method ');
    this.userService.getAllUsers().subscribe(
      {
        next: (v) =>{
          console.log("this is next v in list-users --",v);
          this.users = v;
      },
        error: (e) => console.error("this is the error in list-users---",e),
        complete: () => console.info("this is the complete in list-user ---Users data --",this.users)
    }
    )
  }
  viewDetails(userId : number){
    console.log("In list-users viewDetails data sent :-->>", userId);
    this.router.navigate(['/userDetails',{userId : userId, hide : true}]);
  }

  editDetails(userId : number){
    console.log("In list-users editDetails data sent :-->>", userId);
    this.router.navigate(['/userDetails',{userId: userId, hide : false}]);
  }
}
