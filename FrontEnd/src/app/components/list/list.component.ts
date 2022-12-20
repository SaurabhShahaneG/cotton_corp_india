
// @Component({
//   selector: 'app-list',
//   templateUrl: './list.component.html',
//   styleUrls: ['./list.component.css']
// })
// export class ListComponent {

// }


import { Component, OnInit } from '@angular/core';
import { loginService } from 'src/service/loginService';
import { list } from 'src/app/models/list';

import { Router } from '@angular/router';
import { SharedService } from 'src/service/sharedService';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listOfqr !: list[];
  data!: any;
  constructor(
    private loginService: loginService,
    private route: Router,
    private sharedService: SharedService
  ) {
  }

  ngOnInit(): void {

    this.loginService.getAllList().subscribe(res => {

      this.listOfqr = res;
    })
  }
  setUuid(uuid: any) {
    console.log("In list calling set UUID-", uuid);
    // alert(uuid)
    this.loginService.setUuid(uuid);
    this.route.navigate(['/viewdetails', { uuid: uuid }]);
  }

  setQrCodeUrl(uuid: any) {
    // alert(uuid)
    this.sharedService.setQrCodeUrl(uuid);
    //this.route.navigate(['/qrcode',{uuid:uuid}]);
    this.route.navigate(['/qrcode']);
  }
  getTrackingDetails(uuid: any) {
    console.log("In getTrackingDetails start");
    this.route.navigate(['/balesTracking',{uuid:uuid}]);
  }
}

