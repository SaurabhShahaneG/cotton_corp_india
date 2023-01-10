import { Injectable } from '@angular/core';
// import { qrcode } from 'app/models/qrcode';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // data:JSON;
  uuid_response : any;
  dataToString:any='';
  constructor() { }

  setMessage(data1: any)
  {

    this.uuid_response=data1;
    console.log("in shared service set data",this.uuid_response);

  }
  getMessage(){
    console.log("in shared service getmessage this.uuid", this.uuid_response);
    return this.uuid_response;
  }
  setQrCodeUrl(uuid:any){
  //this.dataToString = "http://10.210.9.218:4200/viewdetails/"+uuid
  this.dataToString = "http://10.210.8.140:8080/Bales/getbyuuid/"+uuid;
  }
  getQrCodeUrl(){
    return this.dataToString;
  }
}


