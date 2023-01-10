
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  regForm : FormGroup;
  response : any;
  constructor(private UserService : UserService,
    private fb: FormBuilder,
    private toastService: HotToastService){}
  ngOnInit(){
    this.regForm = this.fb.group({
      userName: ['' ],
      userFirstName: [''],
      userLastName: [''],
      userPassword: [''],
      email :['']
    });

  }
  onSubmit(){
    console.log("this reg form : ",this.regForm.value);
    this.UserService.save(this.regForm.value).subscribe({
      next: (v) =>{
        console.log("in user service save - this is next v --",v);
        this.response = v;
    },
      error: (e) => console.error("in user service save - this is the error---",e),
      complete: () => {
        this.toastService.success('User registered Successfully');
        console.info("in user service save - this is the complete");
        setTimeout(() => window.location.reload(),1000);
      }
  })
  }

}
