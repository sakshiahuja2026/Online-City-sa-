import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SearchproviderService } from '../service/searchprovider.service';

@Component({
  selector: 'app-available-service',
  templateUrl: './available-service.component.html',
  styleUrls: ['./available-service.component.css']
})
export class AvailableServiceComponent implements OnInit {

  searchForm:FormGroup

  constructor(private searchProvider: SearchproviderService, private toastr: ToastrService, private router: Router) {
    this.searchForm = new FormGroup({
      pincode: new FormControl(''),
      service: new FormControl('')
    })
    
   }

  ngOnInit(): void {
    
  }

   hospitalSearch(){
    this.searchForm.value.service='hospital'
    console.log(this.searchForm.value.service);
    
    localStorage.setItem("pincode",this.searchForm.value.pincode)
    localStorage.setItem("servicevalue",this.searchForm.value.service)
    // this.searchProvider.searchServiceApi(this.searchForm.value).subscribe(resp=>{
    //   console.log(resp);
    //   //localStorage.setItem("availableservice", JSON.stringify(resp));
    //   //localStorage.setItem("pincode",resp.searchForm.pincode)
    //   //localStorage.setItem("service",resp.service)
    //      console.log(this.searchForm.value);
    //      this.router.navigateByUrl("/listservice")
    //      this.toastr.success("Service provider found")
      
    // },err=>{
    //   this.toastr.error("service provider not found")
    // })
    this.router.navigateByUrl("/listservice")
  }
  
  mechanicSearch(){
    this.searchForm.value.service='mechanic'
    
    this.searchProvider.searchServiceApi(this.searchForm.value).subscribe(resp=>{
      console.log(resp);
    
        console.log(this.searchForm.value);
        this.router.navigateByUrl("/listservice")
        this.toastr.success("Service provider found")
       
    },err=>{
      this.toastr.error("service provider not found")
    })
  }
}