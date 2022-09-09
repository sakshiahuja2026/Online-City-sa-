import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { ProviderSignupComponent } from './provider-signup/provider-signup.component';
import { UploadProfileComponent } from './upload-profile/upload-profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AvailableServiceComponent } from './available-service/available-service.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { DialogModule } from "primeng/dialog";
import { LogoutComponent } from './logout/logout.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { AdminComponent } from './admin/admin.component';
import { ListusersComponent } from './listusers/listusers.component';
import { ListspComponent } from './listsp/listsp.component';
import { ApprovalComponent } from './approval/approval.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    ProviderSignupComponent,
    UploadProfileComponent,
    ForgotPasswordComponent,
    AvailableServiceComponent,
    ServiceListComponent,
    LogoutComponent,
    ViewProfileComponent,
    AdminComponent,
    ListusersComponent,
    ListspComponent,
    ApprovalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    DialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
