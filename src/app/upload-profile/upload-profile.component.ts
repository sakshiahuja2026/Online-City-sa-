import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../service.service';

@Component({
  selector: 'app-upload-profile',
  templateUrl: './upload-profile.component.html',
  styleUrls: ['./upload-profile.component.css']
})
export class UploadProfileComponent implements OnInit {
  photo=""
  
  constructor(private sessionService: SessionService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  uploadphoto(){
    let user = {  "photo":this.photo }
    this.sessionService.uploadProfile(user).subscribe(resp=>{
      console.log(resp.data.user);
      this.toastr.success("profile uploaded")
      this.router.navigateByUrl("/home")
    }, err=>{
      this.toastr.error("error")
    })
  }

}
