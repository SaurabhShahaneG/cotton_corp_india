import { Component, OnInit } from '@angular/core';
import { loginService } from 'src/service/loginService';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { timeout } from 'rxjs';


@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  data: any;
  uuid:any ="";
  updateSatusForm : FormGroup;
  hideUpdateForm : boolean = true;
  
  constructor(
    private loginService:loginService,
    private router :ActivatedRoute,
    private fb: FormBuilder,
    private toastService: HotToastService
    ) { }

  ngOnInit(): void {
    
    // throw new Error('Method not implemented.');
    this.router.params.subscribe(params=>{
      console.log("UUID in paramsssss ---",params['uuid']);
      this.uuid = params['uuid'];
      console.log("UUID in thi.uuidddddd ---",this.uuid);

    })
    this.getDataForUuidFromDb();
    console.log("after calling getDataForUuidFromDb");
    this.updateSatusForm = this.fb.group({
      scanLocation: [''],
      scanStatus: [''],
      weight: [''],
      remark: [''],
      userName:['testUser'],
      scanTime : new Date(),
      uuid : this.uuid
      
    });
  }
  onSubmit(){
    console.log("In OnSubmit the data is :--", this.updateSatusForm.value)
    this.loginService.saveBlaeUpdateData(this.updateSatusForm.value).subscribe(res=>
      {
        console.log("Saved Bale Update Info Successfully : ",res);
        const t =this.toastService.success('Updated Successfully');
        this.hideUpdateForm = true;
        setTimeout(() => window.location.reload(),1000)
        //window.location.reload();

      })

  }
  getDataForUuidFromDb(){
  console.log("In getDataForUuidFromDb :--",this.uuid);
 

    // this.loginService.getData(this.uuid).subscribe(res=>{
    //   this.data=res;
    //   console.log("In getDataForUuidFromDb Data is :--",this.data);
      
    // },err=>{
    //   console.log("Error in get Data that is :---", err);
    // })
    // console.log("In getDataForUuidFromDb data we got is --------",this.data);
    this.loginService.getData(this.uuid).subscribe({
      next: (v) =>{ 
        console.log("this is next v --",v);
        this.data = v;
    },
      error: (e) => console.error("this is the error---",e),
      complete: () => console.info("this is the complete ---",'complete') 
  })
  
  }

  hideUpdateFormFun(){
    this.hideUpdateForm = false;
  }
}
