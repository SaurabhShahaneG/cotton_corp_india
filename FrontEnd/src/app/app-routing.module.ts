import { ListUsersComponent } from './components/list-users/list-users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalesTrackingComponent } from './components/bales-tracking/bales-tracking.component';
import { CBISFormComponent } from './components/cbis-form/cbis-form.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { QrCodeComponent } from './components/qr-code/qr-code.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { OnlyLoggedInUsersGuard } from './OnlyLoggedInUsersGuard'
import { UserDetailsComponent } from './components/user-details/user-details.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path :'home',
    component : HomeComponent
  },
  {
    path: 'baleRegistration',
    component: CBISFormComponent,
    canActivate : [OnlyLoggedInUsersGuard]
  },


  {
    path: 'list',
    component: ListComponent,
    canActivate : [OnlyLoggedInUsersGuard]
  },
  {
    path: 'viewdetails',
    component: ViewDetailsComponent,
    canActivate : [OnlyLoggedInUsersGuard]
  },
  {
    path: 'viewdetails/:uuid',
    component: ViewDetailsComponent,
    canActivate : [OnlyLoggedInUsersGuard]
  },
  {
    path:'qrcode',
    component: QrCodeComponent,
    canActivate : [OnlyLoggedInUsersGuard]
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path : 'userRegistration',
    component : UserRegistrationComponent,
    canActivate : [OnlyLoggedInUsersGuard]
  },
  {
    path : 'balesTracking',
    component : BalesTrackingComponent,
    canActivate : [OnlyLoggedInUsersGuard]
  },
  {
    path : 'roleManagement',
    component : ListUsersComponent,
    canActivate : [OnlyLoggedInUsersGuard]
  },
  {
    path : 'userDetails',
    component : UserDetailsComponent,
    canActivate : [OnlyLoggedInUsersGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
