import { Roles } from './Roles';
export class User {
  constructor() {

  }
  userId : number;
  userName : String;
  userFirstName : String;
  userLastName : String;
  email : String;
  userPassword : String;
  role:Roles[];
}
