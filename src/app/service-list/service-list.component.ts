import { Component, OnInit } from '@angular/core';
import { SearchproviderService } from '../service/searchprovider.service';
import { AvailableServiceComponent } from '../available-service/available-service.component';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  searchForm:FormGroup

  constructor(private searchProvider: SearchproviderService, private toastr: ToastrService) {
    this.searchForm = new FormGroup({
      pincode: new FormControl(''),
      service: new FormControl('')
    })
   }

  availableService: Array<any> = []
  ngOnInit(): void {
    let pincode = localStorage.getItem("pincode") as string
    let service = localStorage.getItem("servicevalue") as string
    console.log(pincode);
    console.log(service);
    this.searchForm.value.pincode=pincode
    this.searchForm.value.service=service    
    this.searchProvider.searchServiceApi(this.searchForm.value).subscribe(resp=>{
      // console.log("hello"+resp);
      console.log(resp);
      
         this.toastr.success("Service provider found")
         this.availableService = resp
          console.log("array",this.availableService);
         
    },err=>{
      this.toastr.error("service provider not found")
    })
    
  }

  book(){
    console.log("booked")
    this.toastr.success("your appointment is booked")
    
  }

}