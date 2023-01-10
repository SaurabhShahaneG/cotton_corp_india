import { User } from 'src/app/models/User';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Roles } from 'src/app/models/Roles';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  save(userObj : any){
    console.log("In ser service save method start");
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer ' + sessionStorage.getItem("jwtToken"));
    console.log("http headrs in save in user service:---", headers);
    return this.http.post("http://10.210.8.140:8080/registerNewUser", userObj, {headers : headers});
  }
  getRoles():Observable<Roles[]>{
    console.log("In ser service getRoles method start");
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer ' + sessionStorage.getItem("jwtToken"));
    console.log("http headrs in getRoles in user service:---", headers);
    return this.http.get<Roles[]>("http://10.210.8.140:8080/user/getRoles", {headers : headers});
  }

  getAllUsers(){
    console.log("In user service getAllUsers");
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', 'Bearer ' + sessionStorage.getItem("jwtToken"));
  console.log("http headrs in getAllUsers in user service:---", headers);
  return this.http.get("http://10.210.8.140:8080/user/getAll", {headers : headers})

  }
  getUser(id:number):Observable<User>{
    console.log("In user service getUser");
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', 'Bearer ' + sessionStorage.getItem("jwtToken"));
  console.log("http headrs in getUser in user service:---", headers);
  return this.http.get<User>("http://10.210.8.140:8080/user/getUser/"+id, {headers : headers})
  }

  update(userObj : User):Observable<User>{
    console.log("In user service update method start");
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer ' + sessionStorage.getItem("jwtToken"));
    console.log("http headrs in update in user service:---", headers);
    console.log("object users in update in user service:---", headers);
    return this.http.post<User>("http://10.210.8.140:8080/user/updateUser", userObj, {headers : headers});
  }
}
