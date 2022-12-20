import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { loginService } from 'src/service/loginService';


@Component({
  selector: 'app-bales-tracking',
  templateUrl: './bales-tracking.component.html',
  styleUrls: ['./bales-tracking.component.css']
})
export class BalesTrackingComponent implements OnInit {

  uuid: any;
  trackingData: any;
  constructor(
    private loginService: loginService,
    private router: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      console.log("UUID in paramsssss in bales tracking ---", params['uuid']);
      this.uuid = params['uuid'];
      console.log("UUID in this.uuidddddd in bales tracking ---", this.uuid);
    })
    this.getTrackingData(this.uuid);
  }

  getTrackingData(uuid: any) {
    console.log("In getTrackingData btComponent start");
    this.loginService.getBalesTrackingDataByUuid(uuid).subscribe(
      {
        next: (v) => {
          console.log("this is next v in btComponent --", v);
          this.trackingData = v;
        },
        error: (e) => console.error("this is the error in btComponent ---", e),
        complete: () => console.info("this is the complete in btComponent ---", 'complete')
      }
    )
  }
}

