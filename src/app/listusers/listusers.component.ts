import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../service.service';
@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
  users: Array<any> = []
  user: any = {}
  userId: number = 0;
  display = false
  constructor(private toastr: ToastrService, private router: Router, private sessionService: SessionService) { }

  ngOnInit(): void {
    this.getallUsers()
  }
   
  getallUsers(){
    
    this.sessionService.getallUsers().subscribe(res=>{
      console.log("get all users==>");
      console.log(res.users);
      this.users = res;
    })
  }
  deleteUser(userId: any) {
    console.log("delete user called..." + userId);
    this.sessionService.deleteUser(userId).subscribe(res=>{
      this.toastr.success("user Deleted...")
      this.users = this.users.filter(u => u.userId != userId)
      this.router.navigateByUrl("/home")
    }, err => {
      console.log(err);
      this.toastr.error(err);
    })
  }
  }

