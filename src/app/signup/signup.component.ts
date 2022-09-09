import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup
  constructor(private toastr:ToastrService, private router:Router, private sessionService:SessionService) {
    this.signupForm = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      Dob: new FormControl('',[Validators.required]),
      gender: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      pincode: new FormControl('',[Validators.required])
      
    })
   }

  ngOnInit(): void {
  }

  signup(){
    console.log(this.signupForm.value);
    this.sessionService.userSignupApi(this.signupForm.value).subscribe(res=>{
      if(res){
        this.toastr.success("signup","",{timeOut:3000});
        this.router.navigateByUrl("/login");
      }
    },err=>{
      this.toastr.error("Please enter proper details.")
    })
  }

}
