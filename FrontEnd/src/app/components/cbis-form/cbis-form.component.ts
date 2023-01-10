import { Component, OnInit } from '@angular/core';

import { loginService } from '../../../service/loginService';
import { SharedService } from 'src/service/sharedService';

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cbis-form',
  templateUrl: './cbis-form.component.html',
  styleUrls: ['./cbis-form.component.css']
})
export class CBISFormComponent implements OnInit {

  uuid_response : any;
  cbisForm : FormGroup;
  data: any;

  constructor(
    private loginService:loginService, 
    private shared:SharedService,
    private fb: FormBuilder,
    private router: Router
    ) { }

 
  ngOnInit(): void {

    this.cbisForm = this.fb.group({
      branchName: ['' ],
      centerName: [''],
      cropYear: [''],
      ginnerName: [''],
      address: [''],
      varity: [''],
      lotNo: [''],
      pressWeight: [''],
      pressRunningNum: [''],
      pressMachineNumber: [''],
      cciheapNo: [''],
      cciheapDate: [''],
    });
  }

  onSubmit(){

    this.data = this.cbisForm.value;

    this.loginService.saveData(this.cbisForm.value).subscribe(
      (res:any)=>{
        // console.log("response from angular serviec saveData :--",res);
        //this.loginService.loginUser(res.token);
        this.uuid_response = res;
        console.log("*****************Data is : ****************", this.uuid_response);  
        this.shared.setMessage(this.uuid_response);

          

        
      //  console.log("in save data after set message response:---",res);
      //  window.location.href="/qrcode";
       window.location.href="/list";
      } ,
      (error:any)=> console.log(error)
    )
    
  

  }

}
