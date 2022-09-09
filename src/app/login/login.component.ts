import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  emailPattern = "^[a-z0-9]+@gmail.com";
  otpsend: FormGroup;
  display: boolean = false;


  constructor(private toastr: ToastrService, private router: Router,private sessionService:SessionService) {
    this.loginform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.required]),

    })
    this.otpsend = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    })
   }


  ngOnInit(): void {
  }
  otpsend1(){
    console.log(this.otpsend.value);
    if(this.otpsend.valid){
      this.sessionService.emailsend(this.otpsend.value).subscribe(res => {
        this.toastr.success("otp send successfully")
        localStorage.setItem("email",this.otpsend.value.email)
        this.router.navigateByUrl("/forgotpassword")
      }, err => {
        this.toastr.error("something went wrong")
        console.log(err);
      })
    } else {
      this.toastr.error("please check email")
    }
  }
  showDialog() {
    this.display = true;
  
  }
login(){
  if (this.loginform.valid) {
    this.sessionService.userLoginApi(this.loginform.value).subscribe(res => {
      this.toastr.success("login success")
      console.log(res);
      
      if (res.data.user.role.roleName == "user") {
      localStorage.setItem("response",JSON.stringify(res.data))
      localStorage.setItem("userId",res.data.user.userId)
      localStorage.setItem("email",res.data.user.email)
      localStorage.setItem("firstName",res.data.user.firstName)
        this.router.navigateByUrl("/home")
      } else if (res.data.user.role.roleName == "admin") {

        this.router.navigateByUrl("/admin")
      }


    }, err => {
      this.toastr.error("Invalid Credentials....", "401")
    })
  }
}
}