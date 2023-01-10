import { Roles } from './../../models/Roles';
import { User } from 'src/app/models/User';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { UserService } from 'src/service/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { isTemplateRef } from '@ngneat/overview';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
constructor(private router :ActivatedRoute,
  private userService : UserService,
  private fb : FormBuilder){}
Id : number;
user : User;
hide :boolean ;
availableRoles : Roles[];
assignedRolesId : number[];
assignedRoles : Roles[];
userForm : FormGroup;
  async ngOnInit() {
    this.router.params.subscribe(params=>{
      this.Id = params['userId'];
      console.log("user data in paramsssss user-details---",this.Id);
      console.log("hide value in user-details component ---",params['hide']," type of true/flase",typeof(JSON.parse(params['hide'])));
      this.hide = JSON.parse(params['hide']);
    })
    // this.userForm = this.fb.group({
    //   userId : new FormControl({value : '', disabled : this.hide}),
    //   userName : new FormControl({value : '', disabled : this.hide}),
    //   userFirstName : new FormControl({value : '', disabled : this.hide}),
    //   userLastName :  new FormControl({value : '', disabled : this.hide}),
    //   email :  new FormControl({value : '', disabled : this.hide}),
    //   userPassword : new FormControl({value : '', disabled : this.hide}),
    //   role :  new FormControl({value : '', disabled : this.hide})
    // })
    this.userForm = this.fb.group({
      userId : ['',{disabled : this.hide}],
      userName : ['',{disabled : this.hide}],
      userFirstName : ['',{disabled : this.hide}],
      userLastName :  ['',{disabled : this.hide}],
      email :  ['',{disabled : this.hide}],
      userPassword : ['',{disabled : this.hide}],
      role :  this.fb.array([])
    })
   console.log('In ngOnInit of UserDetailsComponent. Method not implemented.');
    this.availableRoles = await lastValueFrom(this.userService.getRoles());


  //this is i,portant if you subscribe to the survice method then outside of subscdribe you get undefined value of the response store locally in a variable
  //so instead of subscribe method use the below format to store the response in a variable
  this.user =await lastValueFrom(this.userService.getUser(this.Id));
  this.setFormValues();
  }
  setFormValues(){
    console.info("Before patch values :::-->>",this.user)
    this.assignedRoles = this.user.role;
    //this.availableRoles = this.availableRoles.filter(item => this.assignedRoles.indexOf(item) < 0);
    this.availableRoles = this.onlyAvailableRoles(this.availableRoles, this.assignedRoles);
    console.info("++++++++++++++++++++++++++",this.availableRoles,"+++++++++++++++++++++");
    console.info("Before patch values roles are :::-->>",this.user.role)
  this.userForm.patchValue({
    userId : this.user.userId,
    userName : this.user.userName,
    userFirstName : this.user.userFirstName,
    userLastName : this.user.userLastName,
    email : this.user.email,
    userPassword : this.user.userPassword,
  });
 this.user.role.forEach(element =>{
  this.addRoles(element);
 })
}
  async onSubmit(){
    console.log('In ngOnInit of UserDetailsComponent.OnSubmit Method not implemented.');
    console.log("the user role assignment form values are ::->,",this.userForm.value);
    if(this.hide){
      console.log("Submit");
    }
    const res =await lastValueFrom (this.userService.update(this.userForm.value));
    console.log("update successfull/not result is :--->", res);
  }
  roleExist(r:Roles){
    for (let index = 0; index < this.availableRoles.length; index++) {
      if(r.roleId == this.availableRoles[index].roleId)
      return true;
    }
    return false;
  }
  get role() {
    return this.userForm.controls["role"] as FormArray;
  }

  addRoles(role : Roles) {
    console.log("IN add roles---", role.roleId);
    const roleForm = this.fb.group({
      roleId: role.roleId,
      roleName: role.roleName,
      roleDescription :role.roleDescription
    });
    this.role.push(roleForm);
  }

  deleteRoles(role : Roles) {
    this.role.controls.forEach(element =>{
      console.log("elemet is:::-",element
      );

    })
    this.role.removeAt(this.role.value.findIndex((item: Roles)  => item.roleId === role.roleId))
    console.log("NOW THE ROLE ARRAY IS LLL", this.role.value);
  }
  checkboxChange(event:any, value :any){
    console.log("value of the checkbox is :->", value);
    if(event.target.checked){
      this.addRoles(value);
      console.log("Checkbox event value :::===>>"+event.target.value);
    }
    else{
    this.deleteRoles(value);
    }

  }
isRoleExist  (a:Roles, b: Roles) {
  return  a.roleId === b.roleId;
  }

 onlyAvailableRoles ( availableRoles : Roles[], assignedRoles : Roles[]) : Roles[] {
  return availableRoles.filter(leftValue =>
    !assignedRoles.some(rightValue =>
      this.isRoleExist(leftValue, rightValue)));
    }

}
