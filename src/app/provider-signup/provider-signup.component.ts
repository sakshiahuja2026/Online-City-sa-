import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../service.service';

@Component({
  selector: 'app-provider-signup',
  templateUrl: './provider-signup.component.html',
  styleUrls: ['./provider-signup.component.css']
})
export class ProviderSignupComponent implements OnInit {

  providerSignupForm:FormGroup

  constructor(private toastr:ToastrService, private router:Router, private sessionService:SessionService) { 
    this.providerSignupForm = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      Dob: new FormControl('',[Validators.required]),
      gender: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      pincode: new FormControl('',[Validators.required]),
      service: new FormControl('',[Validators.required]),
      photo: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  providerSignup(){
    console.log(this.providerSignupForm.value);
    localStorage.setItem("availableservices",this.providerSignupForm.value)
    this.sessionService.providerSignupApi(this.providerSignupForm.value).subscribe(res=>{
      if(res){
        localStorage.setItem("email",res.data.email)
        this.toastr.success("signup","",{timeOut:3000});
        this.router.navigateByUrl("/login");
      }
    },err=>{
      this.toastr.error("please enter proper details.")
    })
    
  }

}
