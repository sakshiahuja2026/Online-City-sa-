import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../service.service';
@Component({
  selector: 'app-listsp',
  templateUrl: './listsp.component.html',
  styleUrls: ['./listsp.component.css']
})
export class ListspComponent implements OnInit {
  sp: Array<any> = []
  provider: any = {}
  providerId: number = 0;
  display = false
  constructor(private toastr: ToastrService, private router: Router, private sessionService: SessionService) { }

  ngOnInit(): void {
    this.getallSp()
  }
  getallSp(){
    
    this.sessionService.getallSp().subscribe(res=>{
      console.log("get all users==>");
      console.log(res.users);
      this.sp = res;
    })
  }
  deleteProvider(providerId: any) {
    console.log("delete provider called..." + providerId);
    this.sessionService.deleteProvider(providerId).subscribe(res=>{
      this.toastr.success("provider Deleted...")
      this.sp = this.sp.filter(sp => sp.providerId != this.providerId)
      this.router.navigateByUrl("/home")
    }, err => {
      console.log(err);
      this.toastr.error(err);
    })
  }
  approve(providerId:any){
    console.log("approve method called..." + providerId);
    this.sessionService.approve(providerId).subscribe(res=>{
      this.toastr.success("allowed....")

    },err=>{
      console.log(err);
      this.toastr.error(err);
    } )
  }
}
