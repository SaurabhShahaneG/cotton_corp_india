import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { loginService } from 'src/service/loginService';
import { SharedService } from 'src/service/sharedService';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent {
  dataToString:any="";
  
  constructor(
    private shared:SharedService ,
    private loginService:loginService,
    private router :ActivatedRoute, ){}

    ngOnInit(): void {
      this.dataToString = this.shared.getQrCodeUrl();
      console.log("In qr code ngOnInit dataToString: " , this.dataToString)
      // alert("inside onInit of QRCode"+this.dataToString)
      
    }
}
