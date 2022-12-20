import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { list } from "src/app/models/list";



@Injectable({
  providedIn: 'root'
})
export class loginService {
  uuid: any;
  uuid_response: any;
  dataToString: any = '';
  userData: any;
  constructor(private http: HttpClient) { }

  generateToken(credentials: any) {
    //token generate

    return this.http.post("http://10.210.8.140:8080/authenticate", credentials);
  }


  isLoggedIn() {
    let token = sessionStorage.getItem("jwtToken");
    if (token == undefined || token == '' || token == null) {
      return false;
    } else {
      return true
    }
  }

  saveData(data: any) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer ' + sessionStorage.getItem("jwtToken"));
    console.log("http headrs in save:---", headers);
    return this.http.post("http://10.210.8.140:8080/Bales/save", data, {
      headers: headers
    })
  }

  getData(value: String) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer ' + sessionStorage.getItem("jwtToken"));
    console.log("http headrs in getData:---", headers);

    return this.http.get("http://10.210.8.140:8080/Bales/getbyuuid/" + value, {
      headers: headers
    })
  }

  getAllList() {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer ' + sessionStorage.getItem("jwtToken"));
    console.log("http headrs in getAllList:---", headers);
    console.log("http headrs in getAllList by session storage:---", "Bearer ", sessionStorage.getItem("jwtToken"));

    return this.http.get<list[]>("http://10.210.8.140:8080/Bales/getalluuid", {
      headers: headers
    })
  }

  setQrCodeUrl(uuid: any) {
    this.dataToString = "http://10.210.8.140:4200/viewdetails/" + uuid
  }

  getQrCodeUrl() {
    return this.dataToString;
  }

  //for getting token
  getoken() {
    sessionStorage.getItem('token');
  }
  getUuid() {
    return this.uuid;

  }

  setUuid(uuid: any) {
    console.log("In login service calling set uuid--", uuid);
    this.uuid = uuid;
    console.log("In login service calling set uuid and set--", this.uuid);
  }
  saveBlaeUpdateData(data: any) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer ' + sessionStorage.getItem("jwtToken"));
    console.log("http headrs in save:---", headers);
    return this.http.post("http://10.210.8.140:8080/BalesStatusUpdate/saveStatusUpdate", data, { headers: headers })
  }
  logout() {
    sessionStorage.setItem("jwtToken", '');
  }

  getBalesTrackingDataByUuid(uuid: any) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer ' + sessionStorage.getItem("jwtToken"));
    console.log("http headrs in save:---", headers);
    return this.http.get("http://10.210.8.140:8080/BalesStatusUpdate/getTrackingData/" + uuid, { headers: headers })
  }
}