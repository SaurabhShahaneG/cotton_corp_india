import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreHeaderComponent } from './components/pre-header/pre-header.component';
import { CarousalComponent } from './components/carousal/carousal.component';
import { CBISFormComponent } from './components/cbis-form/cbis-form.component';
import { QrCodeComponent } from './components/qr-code/qr-code.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QRCodeModule } from 'angular2-qrcode';
import { HotToastModule } from '@ngneat/hot-toast';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { BalesTrackingComponent } from './components/bales-tracking/bales-tracking.component';
import { OnlyLoggedInUsersGuard } from './OnlyLoggedInUsersGuard';
import { RoleManagementComponent } from './components/role-management/role-management.component'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    PreHeaderComponent,
    CarousalComponent,
    CBISFormComponent,
    QrCodeComponent,
    ListComponent,
    ViewDetailsComponent,
    LoginComponent,
    UserRegistrationComponent,
    BalesTrackingComponent,
    RoleManagementComponent,
    UserDetailsComponent,
    ListUsersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QRCodeModule,
    HotToastModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule,
    DropdownModule

  ],
  providers: [OnlyLoggedInUsersGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
